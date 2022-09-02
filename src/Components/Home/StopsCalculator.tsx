import { ArrowRight } from "heroicons-react"
import { useState } from "react"
import { Input } from "./Input"

export const StopsCalculator: React.FC = () => {
  const [inputState, setInputState] = useState<number>(0)
  return (
    <div>
      <div className="flex h-12 w-full items-center justify-center bg-[#C57B57]">
      <Input value={inputState} onChangeFunction={setInputState}/>
      <button className="
        flex flex-[2] 
        bg-[#C57B57] 
        items-center 
        justify-center 
        h-full">
          <ArrowRight className="text-white"/>
        </button>
    </div>
      
    </div>
  )
}