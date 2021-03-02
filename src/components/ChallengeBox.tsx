import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <div className={ styles.challengeBoxContainer }>
      { activeChallenge ? (
        <div className={ styles.challengeActive }>
          <header>Ganhe {activeChallenge.amount}</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body icon" />
            <strong>Novo desafio</strong>
            <p>
              {activeChallenge.description}
            </p>
          </main>

          <footer>
            <button 
              type="button" 
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>Completei</button>
          </footer>

        </div>
      ) : (
        <div className={ styles.challengeNotActive }>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up icon" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
      
    </div>
  )
}
