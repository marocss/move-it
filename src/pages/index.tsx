import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  // console.log(props);
  
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={ styles.container }>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div >
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { level, currentExperience, challengesCompleted } = context.req.cookies

  // removes experience bar bug when user deletes cookies
  if (Object.keys(context.req.cookies).length === 0) {
    level = '1'
    currentExperience = '0'
    challengesCompleted = '0'
  } 
  
  return {
    props: { 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted) 
    }
  }


  
}