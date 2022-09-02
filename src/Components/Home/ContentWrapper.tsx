import { ReactNode } from "react"

interface IContentWrapper {
  children: ReactNode
}

export const ContentWrapper: React.FC<IContentWrapper> = ({children}) => {
  return (
    <div className="flex flex-col h-screen bg-[#251605] justify-center items-center">
      <img src="../../assets/rocket_init_test.png" alt="" />
      <div className="flex flex-col h-3/5 w-1/3 bg-slate-100 rounded-md">
        {children}
      </div>
    </div>
  )
}