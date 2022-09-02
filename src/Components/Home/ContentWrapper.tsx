import { ReactNode } from "react"

interface IContentWrapper {
  children: ReactNode
}

export const ContentWrapper: React.FC<IContentWrapper> = ({children}) => {
  return (
    <div className="flex flex-col h-screen bg-[#251605] justify-center items-center">
      {/* <img src="src/assets/rocket_init_test.png" className="h-36"/> */}
      <div className="flex items-center justify-center">
        <span className="text-[3rem] text-[#F7DBA7] font-mono font-bold">
          Spaceship Stops
        </span>
      </div>
      <div className="flex flex-col h-3/5 w-1/3 bg-slate-50 rounded-md">
        {children}
      </div>
    </div>
  )
}