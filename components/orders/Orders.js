import React from 'react'
import { useSelector } from 'react-redux'
import Order from './Order'
import styles from '../../styles/Orders.module.css'
import Empty from '../shared/Empty'
const Orders = () => {

    const orders = useSelector((state) => state.orders.orders)
    console.log(orders)
  return (
    <div className={`${styles.orders} flex-col`}>
        {orders.length===0 ? <Empty text="You haven't order anything yet" linkText="Go To Menu" url="/menu" /> : <> 
        <h1>Your Orders</h1>
        {orders.map((order, index) => <Order key={index} order={order}/>)}
        </>}
        
    </div>
  )
}

export default Orders