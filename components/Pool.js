import styles from "../styles/Profile.module.css"

export default function Pool({pool, handleSelection}) {
  const beautify = (str) => (str[0].toUpperCase() + str.slice(1)).replace("_", " ");
  const poolOptions = ['total', "top_10", 'top_5','europe', 'latin', 'asia/pacific'];
  const optionsList = poolOptions.map(option => {
    return (
      <>
      <li className={option === pool? styles.selected: styles.poolList} onClick={handleSelection} id={option}>
      ▶  {beautify(option)}
      </li>
      <br />
      </>
    )
  });
    return (
      <div className={styles.pool}>
        <ul>
        <h4 className="font-bold">
          Selection Pool
        </h4>
        <br />
          {optionsList}
        </ul>
      </div>
    )
  }
  