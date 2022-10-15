import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { getUserActivities } from '../../data/activity';
import { redirectToOauth } from '../../data/auth';
import styles from './profile.module.css';
import ActivityContext from '../../contexts/ActivityContext';

export default function Profile() {
  const [athlete, setAthlete] = useState(null);
  const [completedDistanceInKm, setCompletedDistanceInKm] =
    useContext(ActivityContext);

  useEffect(() => {
    const athlete = JSON.parse(localStorage.getItem('athlete'));
    setAthlete(athlete);

    if (!athlete) {
      return;
    }

    getUserActivities().then((activities) => {
      setCompletedDistanceInKm(
        Math.floor(
          activities.reduce((acc, activity) => {
            return acc + activity.distance / 1000;
          }, 0)
        )
      );
    });
  }, []);

  if (athlete == null) {
    return (
      <div className={styles.signupContainer}>
        <h2 className={styles.title}>Join the challenge</h2>
        <div className={styles.border}></div>
        <div className={styles.stepsContainer}>
          <div className={styles.stepContainer}>
            <span className={styles.stepTitle}>Step 1: </span>
            <button className={styles.stepSignup}>Sign-up now</button>
          </div>
          <div className={styles.stepDivider}> </div>
          <div className={styles.stepContainer}>
            <span className={styles.stepTitle}>Step 2: </span>
            <button className={styles.stepConnect} onClick={redirectToOauth}>
              Connect to Strava
            </button>
          </div>
        </div>
        <h2 className={styles.title}>Share the challenge</h2>
        <div className={styles.border}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileImageBlock}>
        <Image
          src={athlete.profile}
          width={100}
          height={100}
          alt={athlete.firstname}
          objectFit="cover"
          style={{ borderRadius: '50%', 'flex-shrink': 0 }}
        />
        <div>
          <h1 className={styles.label}>
            {athlete.firstname} {athlete.lastname}
          </h1>
          <p className={styles.profileAddress}>
            {athlete.city}, {athlete.country}
          </p>
        </div>
      </div>
      <div>
        <span className={styles.distanceRun}>{completedDistanceInKm}km</span>
        <span className={styles.distanceTotal}> / 150km</span>
      </div>
      <div>
        <span className={styles.label}>£1,000 raised</span>
      </div>
    </div>
  );
}
