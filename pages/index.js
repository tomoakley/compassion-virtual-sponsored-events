import { useState, useContext } from 'react';
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Compassion Virtual Challenges</title>
        <meta
          name="description"
          content="Run a virtual sponsored event for Compassion"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />

      <main className={styles.main}>
        <Profile />
        {content.map((checkpoint, i) => (
          <RoutePanel
            key={checkpoint.title}
            {...checkpoint}
            isLastCheckpoint={i + 1 === content.length}
            checkpointNumber={i}
            completedDistanceInKm={completedDistanceInKm}
            nextCheckpointKm={content[i + 1]}
          />
        ))}
      </main>
    </div>
  );
}
