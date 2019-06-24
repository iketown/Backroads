import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner.jsx"

const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="now ya done fucked up">
          <Link to="/" className="btn-white">
            home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
