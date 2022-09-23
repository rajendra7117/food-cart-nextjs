import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Navigation/Header'
import styles from '../../styles/MainLayout.module.css'

const MainLayout = ({children}) => {
  return (
    <div className={styles.mainLayout}>
        <Header />
        <div className={styles.commonLayout}>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout