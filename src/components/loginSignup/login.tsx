import IonIcon from "@reacticons/ionicons"

const login = () => {
  return (
    <div className="bg-cover bg-center h-screen bg-[url(https://wallpapercave.com/wp/wMM3NrR.jpg)]">
        <div className="container mx-auto md:px-40 px-4 py-40">
            <div className="rounded border border-white">
                <div className="md:grid grid-cols-2 gap-2">
                    <div className="backdrop-blur-xl md:py-20 md:px-20 text-white">
                      <h1 className="text-3xl font-semibold">Welcome Back</h1>
                      <p className="text-xl py-2">Enterprise resource planning </p>
                    </div>
                    <div className="py-8 md:px-16 bg-white">
                      <div className="text-3xl font-semibold flex">
                      <h1 className="">Login</h1>
                      <h1 className="pt-2 pl-2"><IonIcon name="person"></IonIcon></h1>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login