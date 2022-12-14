import { useContext } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from '../components/Header/';
import RoutePanel from '../components/RoutePanel/';
import Profile from '../components/Profile/';
import Hero from '../components/Hero/';
import ActivityContext from '../contexts/ActivityContext';

import content from '../content.json';

export default function Home() {
  const [completedDistanceInKm, _] = useContext(ActivityContext);
  const totalChallengeDistance = content[content.length - 1].progressInKm

  return (
    <div className={styles.container}>
      <Head>
        <title>Compassion Virtual Challenges</title>
        <meta
          name="description"
          content="Run a virtual sponsored event for Compassion"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon_1024x1024.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Header />
      <Hero completedChallenge={completedDistanceInKm >= totalChallengeDistance} />

      <main className={styles.main}>
        <Profile totalChallengeDistance={totalChallengeDistance} />
        {content.map((checkpoint, i) => {
          const nextCheckpoint = content[i+1]
          return (
            <RoutePanel
              key={checkpoint.title}
              {...checkpoint}
              isLastCheckpoint={i + 1 === content.length}
              checkpointNumber={i}
              completedDistanceInKm={completedDistanceInKm}
              nextCheckpointInKm={nextCheckpoint?.progressInKm}
            />
          )
        })}
      </main>
    </div>
  );
}
