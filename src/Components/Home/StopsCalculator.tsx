import { ArrowRight } from "heroicons-react"
import { useState } from "react"
import { fetchSpaceship, fetchSpaceships } from "../../Api/Spaceships"
import { calcAllStops, stopsCalc } from "../../Utils/StopsCalc"
import { Input } from "./Input"
import { StopsResult } from "./StopsResult"
import { Audio } from 'react-loader-spinner'
import RingSpinner from "react-spinners/RingLoader";

export const StopsCalculator: React.FC = () => {
  const [inputState, setInputState] = useState<number>(0)
  const [resultsState, setResultsState] = useState<any[]>([])
  const [fetchingState, setFetchingState] = useState<boolean>(false)

  async function test() {
    const spaceshipsObjects = await fetchSpaceships()

    let spaceships: any[] = []

    await spaceshipsObjects.map(async (spaceshipObject: any) => {
      const spaceship = await fetchSpaceship(spaceshipObject.url)
      spaceships.push(spaceship)
    })

    return spaceships
  }

  async function updateResults() {
    setFetchingState(true)
    const spaceships: any[] = await fetchSpaceships()
    const results = await calcAllStops(spaceships, inputState)
    setResultsState(results)
    setFetchingState(false)
  }

  function handleClick() {
    updateResults()
  }
  return (
    <div className="flex flex-col h-full">
      <div className="flex h-12 w-full items-center justify-center bg-[#C57B57]">
        <Input value={inputState} onChangeFunction={setInputState}/>
        <button className="
          flex flex-[2] 
          bg-[#C57B57] 
          items-center 
          justify-center 
          h-full"
          onClick={handleClick
          }>
            <ArrowRight className="text-white"/>
        </button>
      </div>
      {
        !fetchingState
          ? <StopsResult results={resultsState}/>
          : (<div className="flex h-full w-full items-center justify-center">
            <RingSpinner color="#C57B57" size={150} />
          </div>)
      }
      
    </div>
  )
}
