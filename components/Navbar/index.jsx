import React from 'react'
import styles from './navbar.module.css'
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_li}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>project</li>
      </ul>
    </nav>
  );
}

export default Navbar