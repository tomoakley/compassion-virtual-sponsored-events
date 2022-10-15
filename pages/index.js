import {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header/'
import RoutePanel from '../components/RoutePanel/'

import content from '../content.json'

export default function Home() {
  const [completedDistanceInKm, setCompletedDistanceInKm] = useState(40)

  return (
    <div className={styles.container}>
      <Head>
        <title>Compassion Virtual Challenges</title>
        <meta name="description" content="Run a virtual sponsored event for Compassion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        {content.map((checkpoint, i) =>
          <RoutePanel
            key={checkpoint.title}
            {...checkpoint}
            isLastCheckpoint={i+1 === content.length}
            checkpointNumber={i}
            completedDistanceInKm={completedDistanceInKm}
          />)}
      </main>

    </div>
  )
}
