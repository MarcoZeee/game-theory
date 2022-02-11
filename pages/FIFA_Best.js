import Methods from "../components/Methods"
import Ranking from "../components/Ranking"
import Pool from "../components/Pool"
import styles from '../styles/Profile.module.css'
import Intro from "../components/Intro"
import {useState } from "react"
import useSWR from "swr"


const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
const options = ['current_system','approval', 'popularity', 'runoff','borda_count', 'tideman'];


export default function FIFA_Best() {
  const [method, setMethod] = useState("current_system");
  const [pool, setPool] = useState("total");
  const {data, error} = useSWR('/api/votes_fifa', fetcher);
  function handleMethod(e) {
    setMethod(e.target.id);
  }
  function handlePool(e) {
    setPool(e.target.id);
  }
  if(error) return (<h2>Failed to load the data</h2>)
  if(!data) return (<h2>Loading...</h2>)
  function result(method = "approval", pool = "total", data) {
    let raw = data[pool][method] || [];
    return Object.entries(raw).map(([player, score ], i) => {
      return {
        id: i + 1,
        name: player,
        url: `./${player.toLowerCase()}.jpg`,
        score: score
      };
    });
  }
  const resultData = result(method, pool, data);
    return (
      <main className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Methods method={method} handleSelection={handleMethod} options ={options}/>
          <hr />
          <Pool pool={pool} handleSelection={handlePool}/>
        </div>
        <div className={styles.main}>
          <Intro method={method}/>
          <Ranking result={resultData} />
        </div>
      </main>
    )
            
  }
  