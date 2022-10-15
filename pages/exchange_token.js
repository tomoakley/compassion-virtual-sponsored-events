import { useEffect, useCallback } from 'react';
import { loginWithAccessToken } from '../data/auth';

export default function ExchangeToken() {
  function getExchangeToken() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    return code;
  }

  useEffect(() => {
    const exchangeToken = getExchangeToken();

    if (!exchangeToken) {
      console.log('No access token found');
      return;
    }

    console.log(`Logging in with access token ${exchangeToken}`);

    loginWithAccessToken(exchangeToken).then(() => {
      window.location.href = '/';
    }
    );
  }, []);

  return (
    <div>
      <button type="">Loading</button>
    </div>
  );
}
