import React from 'react'
import styles from '../../styles/LandingPage.module.css'
const Home = () => {
  return (
    <div className={`${styles.home}`}>

        <div className={`${styles.homeInfo} boxshadow-2 flex-col`}>
                <h1>Welcome to food cart!</h1>
                <h3>Enjoy your delicious food</h3>
                <p>Wide range of varities, order your favorites now</p>
                <button className='button-1'>Order now</button>
        </div>
    </div>
  )
}

export default Home