import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title 
        }
      }
    }
  `)
  return (
    <div>
      <p className={styles.headerHead}>{data.site.siteMetadata.title}</p>
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
