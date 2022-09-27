import React from 'react'
import styles from '../../styles/Categories.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Category = ({img, id, title}) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(`/categories/${title}`)
    }

    const myLoader=({src})=>{
      return `${img}`;
    }
  return (
    <div className={`${styles.category} flex-col boxshadow-2`} onClick={handleClick}>
        <Image loader={myLoader} src={img} alt="food-item" width={100} height={100}/>
        <h2>{title}</h2>
    </div>
  )
}

export default Category