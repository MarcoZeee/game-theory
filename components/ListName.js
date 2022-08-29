
import Image from "next/image";
export default function ListName({person}) {
    return (
      <>
      <div>
        <p style={{'font-size': "1.8rem"}}>
          <strong>{person.id} </strong>{ }      
        </p>
        <Image src={person.url} alt={person.name} width={115} height= {115}/>
        <div>
          <div>
            <p>
              {person.name}
            </p>
            <p> 
              RECORD
            </p>
          </div>
          <span>{person.score}</span>
        </div>
      </div>
      </>
    )
  }