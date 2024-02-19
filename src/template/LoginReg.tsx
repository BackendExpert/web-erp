import { ReactNode } from "react"

interface Props{
    children: ReactNode;
}

const loginReg = ({children}:Props) => {
  return (
    <div className="bg-[(https://wallpapercave.com/wp/wMM3NrR.jpg)] w-screen h-screen bg-cover bg-center">
        <div className="container mx-auto px-32">
            {children}
        </div>
    </div>
  )
}

export default loginReg