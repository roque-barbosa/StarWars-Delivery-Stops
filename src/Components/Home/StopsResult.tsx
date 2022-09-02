import { ResultRow } from "./ResultRow"

interface IStopsResult {
  results: any[]
}

export const StopsResult: React.FC<IStopsResult> = ({results}) => {
  return(
    <div className="flex flex-col pl-2 pt-2 pr-1 gap-2 overflow-y-scroll scrollbar-hide">
      {results.map(result => (<ResultRow result={result}/>))}
    </div>
  )
}