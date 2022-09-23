import React from "react";
import styles from '../../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={`${styles.header} flex-row`}>
      <nav>
        <ul className="nav-list flex-row">
          <li><Link href="/menu"><a>Menu</a></Link></li>
          <li><Link href="/offers"><a>Offers</a></Link></li>
          <li><Link href="/orders"><a>Orders</a></Link></li>
         
        </ul>
      </nav>
      <div className={styles.logo}>
        <Link href="/"><a>Food Cart</a></Link>
      </div>

      <div className={`${styles.cartButton} button-1`}>
        <Link href="/cart">
        <a>cart icon</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
