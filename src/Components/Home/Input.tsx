import {ArrowRight} from "heroicons-react";

interface Iinput{
  value: number
  onChangeFunction: Function
}

export const Input: React.FC<Iinput> = ({value, onChangeFunction}) => {
  return (
    <input
        type="number"
        value={value}
        onChange={(e) =>onChangeFunction(e.target.value)}
        className="focus: outline-none flex-[10] h-5/6 ml-[0.1rem] rounded-md pl-3" />
  )
}
