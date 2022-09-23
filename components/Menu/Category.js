import React from 'react'
import styles from '../../styles/Categories.module.css'
import { useRouter } from 'next/router'
const Category = ({img, id, title}) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(`/categories/${title}`)
    }
  return (
    <div className={`${styles.category} flex-col boxshadow-2`} onClick={handleClick}>
        <img src={img} alt="food-item"/>
        <h2>{title}</h2>
    </div>
  )
}

export default Category