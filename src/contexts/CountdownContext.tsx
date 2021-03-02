import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengesContext } from './ChallengesContext'

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isCountdownActive: boolean;
  isCountdownDone: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}


export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.05 * 60)
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [isCountdownDone, setIsCountdownDone] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsCountdownActive(true)
  }

  function resetCountdown() {
    // clearTimeout(countdownTimeout)
    setIsCountdownActive(false)
    setTime(0.05 * 60)
    setIsCountdownDone(false)
  }

  useEffect(() => {
    // effect
    if (isCountdownActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isCountdownActive && time === 0) {
      console.log('countdown ended');
      setIsCountdownDone(true)
      setIsCountdownActive(false)
      startNewChallenge()
    }

    return () => {
      // cleanup
      clearTimeout(countdownTimeout)
    }
  }, [isCountdownActive, time])


  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      isCountdownActive,
      isCountdownDone,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}