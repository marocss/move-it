import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

// let countdownTimeout: NodeJS.Timeout

export const Countdown: React.FC = () => {
  const { 
    minutes, 
    seconds, 
    isCountdownDone, 
    isCountdownActive, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext)
  // const { startNewChallenge } = useContext(ChallengesContext)

  // const [time, setTime] = useState(0.05 * 60)
  // const [isCountdownActive, setIsCountdownActive] = useState(false)
  // const [isCountdownDone, setIsCountdownDone] = useState(false)

  // const minutes = Math.floor(time / 60)
  // const seconds = time % 60

  const [minuteDecimalDigit, minuteUnitDigit] = String(minutes).padStart(2, '0').split('')
  const [secondsDecimalDigit, secondsUnitDigit] = String(seconds).padStart(2, '0').split('')

  // function startCountdown() {
  //   setIsCountdownActive(true)
  // }

  // function resetCountdown() {
  //   // clearTimeout(countdownTimeout)
  //   setIsCountdownActive(false)
  //   setTime(0.05 * 60)
  // }

  // useEffect(() => {
  //   // effect
  //   if (isCountdownActive && time > 0) {
  //     countdownTimeout = setTimeout(() => {
  //       setTime(time - 1)
  //     }, 1000)
  //   } else if (isCountdownActive && time === 0) {
  //     console.log('countdown ended');
  //     setIsCountdownDone(true)
  //     setIsCountdownActive(false)
  //     startNewChallenge()
  //   }

  //   return () => {
  //     // cleanup
  //     clearTimeout(countdownTimeout)
  //   }
  // }, [isCountdownActive, time])

  return (
    <div>
      <div className={ styles.countdownContainer }>
        <div>
          <span>{minuteDecimalDigit}</span>
          <span>{minuteUnitDigit}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsDecimalDigit}</span>
          <span>{secondsUnitDigit}</span>
        </div>
      </div>

      { isCountdownDone ? (
        <button disabled className={ styles.countdownButton }>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {
            isCountdownActive ? (
              <button type="button" className={ `${styles.countdownButton} ${ styles.countdownButtonActive}` } onClick={resetCountdown}>
                Abandonar ciclo
              </button>
              ) : (
                <button type="button" className={ styles.countdownButton } onClick={startCountdown}>
                Iniciar um ciclo
              </button> )
          }
        </>
      )}
    </div>
  )
}
