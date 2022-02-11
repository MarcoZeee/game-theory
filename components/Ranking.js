import styles from "../styles/Profile.module.css"
import ListName from "./ListName"
import Table from "./Table"


export default function Ranking({result}) {
  if(result.length === 0) return (<h2 style={{'display': "grid", 'place-items': 'center'}}>No data yet for this pool</h2>)
    const profileList = result.slice(0,5).map((winner, i) => {
        return (
          <tr key={winner + i}>
            <td>
            <ListName person = {winner}/>
            </td>
          </tr>
        )
    })
    return (
      <div className={styles.ranking}>
        <Table className='object-cover'>          
            {profileList}
        </Table>
      </div>
    )
  }