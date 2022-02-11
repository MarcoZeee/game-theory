
import Image from "next/image";
export default function ListName({person}) {
    return (
      <>
      <div className="py-8 px-8 max-w-lg mx-auto bg-blue-50 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 border-blue-200">
        <p style={{'font-size': "1.8rem"}}>
          <strong>{person.id} </strong>{ }      
        </p>
        <Image className="block h-24 rounded-full sm:mx-0 sm:shrink-0" src={person.url} alt={person.name} width={115} height= {115}/>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {person.name}
            </p>
            <p className="text-slate-500 font-medium"> 
              RECORD
            </p>
          </div>
          <span className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 min-w-max">{person.score}</span>
        </div>
      </div>
      </>
    )
  }