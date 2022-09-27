import React from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import Search from "../Search/Search";
import CartLink from "../Cart/CartLink";

const Header = () => {
  return (
    <div className={`${styles.header} flex-row`}>
      <nav>
        <ul className="nav-list flex-row">
          <li>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/offers">
              <a>Offers</a>
            </Link>
          </li>
          <li>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <Link href="/">
          <a>Food Cart</a>
        </Link>
      </div>
      <Search />
      <CartLink />
    </div>
  );
};

export default Header;
