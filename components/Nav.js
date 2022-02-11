import styles from "../styles/Nav.module.css"
import Link from "next/link"

const Nav = ()=> {
    return (
      <nav className={styles.nav}>
        <ul>
            <li>
                <Link href='/'>
                    Home
                </Link>
            </li>
            |
            <li>
                <Link href='/ballon_dor'>
                    Ballon Dor
                </Link>
            </li>
            |
            <li>
                <Link href='/FIFA_Best'>
                    FIFA Best
                </Link>
            </li>
            |
            <li>
                <Link href="./glossary">
                    Glossary
                </Link>
            </li>
        </ul>
      </nav>
    )
  }
  export default Nav