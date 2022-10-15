const STRAVA_URL = 'https://www.strava.com';
const SCOPE = 'read,activity:read';

export function redirectToOauth() {
  if (typeof window === 'undefined') {
    return;
  }

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const callbackDomain = process.env.NEXT_PUBLIC_CALLBACK_DOMAIN;
  window.location.href = `${STRAVA_URL}/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${callbackDomain}/exchange_token&approval_prompt=force&scope=${SCOPE}`;
}

export async function loginWithAccessToken(exchangeToken) {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const url = `${STRAVA_URL}/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${exchangeToken}&grant_type=authorization_code`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw "Couldn't log in";
  }

  const data = await response.json();

  const auth = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: data.expires_at,
  };

  const athlete = data.athlete;

  console.log(athlete);
  console.log(auth);

  localStorage.setItem('athlete', JSON.stringify(athlete));
  localStorage.setItem('auth', JSON.stringify(auth));
}

export async function getUserActivities(from) {
  const url = `${STRAVA_URL}/api/v3/athlete/activities?after=${from}&per_page=200`;

  const user = JSON.parse(localStorage.getItem('user'));
  const access_token = user.access_token;
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const response = await fetch(url, { headers });

  return response.json();
}
