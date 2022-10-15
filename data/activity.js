const STRAVA_URI = 'https://www.strava.com';

export async function getUserActivities() {
  if (process.env.NODE_ENV === 'development') {
    return [
      {
        distance: 1000,
      },
      {
        distance: 2000,
      },
      {
        distance: 4000,
      },
      {
        distance: 5000,
      },
      {
        distance: 6000,
      },
    ];
  }
  const url = `${STRAVA_URI}/api/v3/athlete/activities?before=1672442340&after=1659312000&page=1&per_page=200`;

  const auth = JSON.parse(localStorage.getItem('auth'));

  const accessToken = auth.accessToken;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch(url, { headers });

  if (response.status !== 200) {
    throw "Couldn't get activities";
  }

  const data = await response.json();

  return data;
}
