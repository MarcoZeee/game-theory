import styles from "../styles/Home.module.css"
import Nav from "./Nav"
import Footer from './Footer'

export default function Layout({children}) {
    return (
      <>
        <Nav />
          <main className={styles.title}>
              <h3>
              Who deserves to be the best footballer?
              </h3>
              <p>
                a game theory approach 
              </p>
          </main>
          {children}
          <Footer />
      </>
    )
  }