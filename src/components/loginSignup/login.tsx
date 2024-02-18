import IonIcon from "@reacticons/ionicons"

const login = () => {
  return (
    <div className="bg-cover bg-center h-screen bg-[url(https://wallpapercave.com/wp/wMM3NrR.jpg)]">
        <div className="container mx-auto md:px-40 px-4 py-40">
            <div className="rounded md:border md:border-white">
                <div className="md:grid grid-cols-2">
                    <div className="backdrop-blur-xl md:py-20 md:px-20 text-white md:visible invisible">
                      <h1 className="text-3xl font-semibold">Welcome Back</h1>
                      <p className="text-xl py-2">Enterprise resource planning </p>
                    </div>
                    <div className="py-8 md:px-16 px-8 bg-white md:mt-0 -mt-12">
                      <div className="text-3xl font-semibold flex">
                        <h1 className="">Login</h1>
                        <h1 className="pt-2 pl-2"><IonIcon name="person"></IonIcon></h1>
                      </div>
                      <div className="">
                        <form>
                          <div className="py-4">
                            <label htmlFor="username" className="text-xl" >Username :</label>
                            <input type="text" className="text-xl pl-2 border border-gray-300 w-full h-12 rouded mt-2" />
                          </div>
                          <div className="py-4">
                            <label htmlFor="password" className="text-xl">Password :</label>
                            <input type="password" className="pl-2 text-xl border border-gray-300 w-full h-12 rouded mt-2" />
                          </div>
                          <div className="py-4">
                            <button className="rounded border border-blue-500 text-blue-600 w-full h-16 text-xl duration-500 hover:bg-blue-500 hover:text-white">Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login