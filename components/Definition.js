import styles from "../styles/Home.module.css"


export default function Definition({def}) {
  const beautify = (str) => (str[0].toUpperCase() + str.slice(1)).replaceAll("_", " ");
    const list = Object.entries(def).sort((a, b)=> a[0].localeCompare(b[0])).map(([word, meaning])=> {
      return( 
        <>
          <li>
            <strong>{beautify(word)}: <br /> </strong> {meaning}
          </li>
      <br />
        </>
      )
    })
    return (
      <div>
        <ul className={styles.def}>
          {list}
        </ul>
      </div>
    )
  }