interface IResultRow {
  result: {name:string, stops: number}
}

export const ResultRow: React.FC<IResultRow> = ({result}) => {
  return (
    <div className="flex w-full h-10 justify-between border-b-2 border-gray-300">
      <span className="flex flex-[8] items-center pl-4">{result.name}</span>
      <div className="flex flex-[2] justify-center items-center h-full">
        <span className="flex bg-[#C57B57] h-full w-full rounded-md p-1 text-white justify-center items-center">
          {result.stops}
        </span>
      </div>
    </div>
  )
}