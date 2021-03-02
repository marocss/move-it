import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/marocss.png" alt="user-avatar"/>
      <div>
        <strong>Marcos Roberto</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}
