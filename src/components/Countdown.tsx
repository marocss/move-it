import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

export const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.5 * 60)
  const [isCountdownActive, setIsCountdownActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteDecimalDigit, minuteUnitDigit] = String(minutes).padStart(2, '0').split('')
  const [secondsDecimalDigit, secondsUnitDigit] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsCountdownActive(true)
  }

  useEffect(() => {
    // effect
    if (isCountdownActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }

    return () => {
      // cleanup
    }
  }, [isCountdownActive, time])

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

      <button type="button" className={ styles.startCountdownButton } onClick={startCountdown}>
        Iniciar um ciclo
      </button>
    </div>
  )
}
