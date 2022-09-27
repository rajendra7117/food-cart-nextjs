import React, {useRef} from 'react'
import styles from '../../styles/Header.module.css'
import {FcSearch} from 'react-icons/fc'
import { useRouter } from 'next/router'
const Search = () => {
    const inputRef = useRef()
    const router = useRouter()

    const searchForMeal = () => {
     
      let query = inputRef.current.value.trim()
      router.push(`/search/${query}`)

    }
  return (
    <div className={styles.searchContainer}>
    <input type="text" placeholder="search for a meal" ref={inputRef} />
    <button className='button-4' onClick={searchForMeal}><FcSearch /></button>
  </div>
  )
}

export default Search