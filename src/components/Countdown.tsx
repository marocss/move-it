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

  const [minuteDecimalDigit, minuteUnitDigit] = String(minutes).padStart(2, '0').split('')
  const [secondsDecimalDigit, secondsUnitDigit] = String(seconds).padStart(2, '0').split('')

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
