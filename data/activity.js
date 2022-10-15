const STRAVA_URI = 'https://www.strava.com';

export async function getUserActivities() {
  const url = `${STRAVA_URI}/api/v3/athlete/activities?before=1672442340&after=1659312000&page=1&per_page=200`;

  const auth = JSON.parse(localStorage.getItem('auth'));

  console.log(auth);
  const accessToken = auth.accessToken;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch(url, { headers });

  if (response.status !== 200) {
    throw "Couldn't get activities";
  }

  const data = await response.json();
  console.log(data);

  return data;
}
