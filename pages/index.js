import MyHead from '../pages/Header';
import MyFooter from '../pages/Footer';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { timeToSecond, convertToShow } from '../Functions/countdownFunction';

export default function Home() {

  const [time, setTime] = useState("00:00:10");
  const [countdown, setCountdown] = useState();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive == true) {

      let temp = timeToSecond(time);
      let count = setInterval(() => {
        temp--;
        if (temp >= 0) {
          setCountdown(convertToShow(temp));
        } else {
          setIsActive(false);
          clearInterval(count);
        }
      }, 1000);

    }
  }, [isActive])

  return (

    <div className={styles.container}>
      <MyHead
        title="Countdown Time"
        description="Countdown time page"
      />

      <main className={styles.main}>

        <h1 className={styles.title}>Countdown Time</h1>

        <div className={styles.centerContainer}>

          <div className={styles.cardInfo}>

            <div className={styles.cardHours}>
              <p className={styles.pStyled}>Set Time Here</p>

              <input
                type="time"
                step="2"
                value={time}
                onChange={(time) => { setTime(time.target.value) }}
                className={styles.hourInput}
              />

              <button
                className={styles.startButton}
                onClick={() => { setIsActive(true); setCountdown(time); }}
              >
                Countdown Now
              </button>

            </div>

          </div>

          <div className={styles.cardResponse}>
            <p className={styles.pStyled}>Time Left</p>
            <h1>{isActive ? countdown : "Waiting to start"}</h1>
          </div>

        </div>

      </main>

      <MyFooter
        footerStyle={styles.footer}
        footerSpanStyle={styles.logo}
        svgStyle={styles.svgStyle}
        link="https://github.com/jeffersonmatheusdev"
      />
    </div>
  )
}
