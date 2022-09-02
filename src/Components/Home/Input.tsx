import {ArrowRight} from "heroicons-react";

interface Iinput{
  value: number
  onChangeFunction: Function
}

export const Input: React.FC<Iinput> = ({value, onChangeFunction}) => {
  return (
    <div className="flex h-12 w-full items-center justify-center
      bg-[#C57B57]
    ">
      <input
        type="number"
        value={value}
        onChange={(e) =>onChangeFunction(e.target.value)}
        className="focus: outline-none flex-[10] h-5/6 ml-[0.1rem] rounded-md pl-3" />
      <button className="
        flex flex-[2] 
        bg-[#C57B57] 
        items-center 
        justify-center 
        h-full">
          <ArrowRight className="text-white"/>
        </button>
    </div>
  )
}