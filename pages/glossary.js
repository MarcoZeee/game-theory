import Definition from '../components/Definition'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'


const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
export default function Glossary() {
  const {data, error} = useSWR('/api/glossaryAPI', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className={styles.table}>
      <Definition def = {data}/>
    </div>
  )
}
