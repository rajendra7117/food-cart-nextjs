import React from 'react'
import styles from '../../styles/FoodItems.module.css'
const Item = ({id, title, img}) => {
  return (
    <div className={`${styles.foodItem} flex-col boxshadow-2`} >
        <img src={img} alt="food-item"/>
        <h3>{title}</h3>
    </div>
  )
}

export default Item