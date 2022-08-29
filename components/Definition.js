import styles from "../styles/Home.module.css";
import { beautify } from "./utilities";

export default function Definition({ def }) {
  const list = Object.entries(def)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([word, meaning]) => {
      return (
        <>
          <li>
            <strong>
              {beautify(word)}: <br />{" "}
            </strong>{" "}
            {meaning}
          </li>
          <br />
        </>
      );
    });
  return (
    <div>
      <ul className={styles.def}>{list}</ul>
    </div>
  );
}
