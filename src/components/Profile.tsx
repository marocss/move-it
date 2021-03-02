import React from 'react';
import styles from '../styles/components/Profile.module.css'

export const Profile: React.FC = () => {
  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/marocss.png" alt="user-avatar"/>
      <div>
        <strong>Marcos Roberto</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}
