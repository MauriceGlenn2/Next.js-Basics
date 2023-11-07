import React from 'react'
import styles from "../styles/NavBar.module.css"

//routing Link for rounting, wrap componet with link with href
import Link from 'next/link'

function NavBar() {
    // console.log(styles)
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/post">
          <li>Post</li>
        </Link>
        <Link href="/users">
          <li>Users</li>
        </Link>
        <input type='text' placeholder='Enter Movies....' />
      </ul>
    </nav>
  );
}

export default NavBar