import { useState } from "react"
import { Input } from "./Input"

export const StopsCalculator: React.FC = () => {
  const [inputState, setInputState] = useState<number>(0)
  return (
    <div>
      <Input value={inputState} onChangeFunction={setInputState}/>
    </div>
  )
}