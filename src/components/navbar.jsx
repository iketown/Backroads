import React, { useState } from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import socialIcons from "../constants/socialIcons"
import styles from "../css/navbar.module.css"
import logo from "../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => {
    setIsOpen(open => !open)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((link, index) => {
            return (
              <li key={link.text}>
                <AniLink to={link.path} fade>
                  {link.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={item.url + index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
