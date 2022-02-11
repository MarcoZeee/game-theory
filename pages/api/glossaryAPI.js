const glossaryAPI = {
    approval: "Approval method basically counts the one candidate with the most votes, regradless of the ranking.",
    current_system: "Reference to the definitions of current system FIFA and France Football",
    current_system_FIFA: "FIFA Best system 2021 takes 3 candidates each vote and score them 5, 3 and 1 points individually.",
    current_system_France_football: "Ballon D'or 2021 ranks 5 players from each counted vote in respective 6, 4, 3, 2, 1 points, from most favoured to the least. ",
    'popularity': "Popularity votes count one candidate with the most first choice selection.",
    'runoff': "Instant runoff eliminates least popular candidate each round until there's only one candidate left, which turns out to be the winner.",
    'borda_count': "Borda count scores n-th candidate with n - 1 points, and then sums them to reap the candidate with most points.",
    'tideman': "Tideman method calculates the margin of each combination of two, then produces the winner when one has no defeat or least defeat difference.",
    'Top 10': 'This selection pool includes votes from top 10 countries in soccer world(Argentina, Belgium, Brazil, England, France, Germany, Italy, the Netherlands, Portugal and Spain).',
    'Total': "This pool includes all raw votes for the award.",
    'selection pool': 'Sample pool by different standard',
    'Top 5': "Votes from countries of Big 5 European leagues"

}



export default function handler(req, res) {
    res.status(200).json(glossaryAPI);
  }
  