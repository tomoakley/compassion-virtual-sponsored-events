import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types'
import { getUserActivities } from '../../data/activity';
import { redirectToOauth } from '../../data/auth';
import styles from './profile.module.css';
import ActivityContext from '../../contexts/ActivityContext';

export default function Profile({ totalChallengeDistance }) {
  const [athlete, setAthlete] = useState(null);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [completedDistanceInKm, setCompletedDistanceInKm] =
    useContext(ActivityContext);

  function getDemoData() {
    const params = new URLSearchParams(window.location.search);
    const km = params.get('demo_km');
    return km;
  }

  useEffect(() => {
    const demoKm = getDemoData();

    const athlete = JSON.parse(localStorage.getItem('athlete'));
    setAthlete(athlete);

    if (!athlete) {
      return;
    }

    if (demoKm) {
      setIsDemoMode(true);
      setCompletedDistanceInKm(demoKm);
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

  if (athlete == null && !isDemoMode) {
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
          src={athlete?.profile}
          width={100}
          height={100}
          alt={athlete?.firstname}
          objectFit="cover"
          style={{ borderRadius: '50%', 'flex-shrink': 0 }}
        />
        <div>
          <h1 className={styles.label}>
            {athlete?.firstname} {athlete?.lastname}
          </h1>
          <p className={styles.profileAddress}>
            {athlete?.city}, {athlete?.country}
          </p>
        </div>
      </div>
      <div>
        <div>
          <span className={styles.distanceRun}>{completedDistanceInKm}km</span>
          <span className={styles.distanceTotal}> / {totalChallengeDistance}km</span>
        </div>
        {completedDistanceInKm < totalChallengeDistance ? (
          <>
            <span className={styles.textButton}> Add mileage</span>
            <span className={styles.profileAddress}>{' >'}</span>
          </>
        ) : (
          <>
          <span className={styles.distanceComplete}>🥳🎉🥳🎉🥳🎉🥳🎉</span>
          </>
        )
        }
      </div>
      <div>
        <div>
          <span className={styles.label}>£1,000 raised</span>
        </div>
        <span className={styles.textButton}>Donate</span>
        <span className={styles.profileAddress}>{' >'}</span>
      </div>
    </div>
  );
}

Profile.propTypes = {
  totalChallengeDistance: PropTypes.number
}
