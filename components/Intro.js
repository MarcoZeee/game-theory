import styles from "../styles/Profile.module.css"

const data = {
  approval: "Approval method basically counts the one candidate with the most votes, regradless of the ranking.",
  current_system: "Reference to the definitions of current system FIFA and France Football in Glossary section",
  current_system_FIFA: "FIFA Best system 2021 takes 3 candidates each vote and score them 5, 3 and 1 points individually",
  current_system_France_football: "Ballon D'or 2021 ranks 5 players from each counted vote 6, 4, 3, 2, 1 points respectively, from most favoured to the least ",
  'popularity': "Popularity votes count one candidate with the most first choice selection",
  'runoff': "Instant runoff eliminates least popular candidate each round until there's only one candidate left",
  'borda_count': "Borda count scores n-th candidate with n - 1 points, and then sum them to reap the candidate with most points",
  'tideman': "Tideman method calculates the margin of each combination of two, then produces the winner when one has no defeat or least defeat difference"
}
export default function Intro({method}) {
    const beautify = (str) => (str[0].toUpperCase() + str.slice(1)).replace("_", " ");
    return (
      <div className={styles.intro}>
        <h2 className="lg:items-center font-bold">{beautify(method)}</h2>
        {data[method]|| "Working on it"}
      </div>
    )
  }