import {useState} from 'react';

import ActivityContext from '../contexts/ActivityContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const activityHook = useState(0);
  return (
    <ActivityContext.Provider value = {activityHook}>
      <Component {...pageProps} />
    </ActivityContext.Provider>
  );
}

export default MyApp;
