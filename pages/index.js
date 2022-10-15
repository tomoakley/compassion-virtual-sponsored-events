import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header/'
import RoutePanel from '../components/RoutePanel/'
import Hero from '../components/Hero/'

import content from '../content.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Compassion Virtual Challenges</title>
        <meta name="description" content="Run a virtual sponsored event for Compassion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />

      <main className={styles.main}>
        {content.map((checkpoint, i) =>
          <RoutePanel
            key={checkpoint.title}
            {...checkpoint}
            isLastCheckpoint={i+1 === content.length} />
        )}
      </main>

    </div>
  )
}
