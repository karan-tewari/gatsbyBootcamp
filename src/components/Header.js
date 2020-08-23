import React from "react"

import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = () => {
  return (
    <div>
      <p className={styles.headerHead}>Karan Tewari</p>
      <ul>
        <li>
          <Link className={styles.link} activeClassName={styles.active} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} activeClassName={styles.active} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className={styles.link} activeClassName={styles.active} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} activeClassName={styles.active} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
