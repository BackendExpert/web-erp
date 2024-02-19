import { ReactNode } from "react"

interface Props{
    children: ReactNode;
}

const loginReg = ({children}:Props) => {
  return (
    <div className="">
        <div className="container mx-auto px-32">
            Login
        </div>
    </div>
  )
}

export default loginReg