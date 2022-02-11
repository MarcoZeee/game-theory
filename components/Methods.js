
import styles from "../styles/Profile.module.css"
export default function Methods({method, handleSelection, options}) {
  const beautify = (str) => (str[0].toUpperCase() + str.slice(1)).replaceAll("_", " ");
  const optionsList = options.map(option => {
    return (
      <>
      <li className={option === method? styles.selected: styles.listElement} onClick={handleSelection} id={option}>
      ▶  {beautify(option)}
      </li>
      <br />
      </>
    )
  });
    return (
      <div className={styles.methods}>
        <div>
        <ul>
          <h4 className="font-bold">
            Voting Methods
          </h4>
          <br />
          {optionsList}
        </ul>
       </div>
      </div>
    )
  }