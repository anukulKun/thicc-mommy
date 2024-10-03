
function App() {

  return (

    <div className='h-screen w-full flex '>
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">

        <a className="py-3 px-5 border rounded border-blue-200 text-blue-400" href="/create">Add new Project</a>

        <hr className="w-[80%] my-3" />

        <h1 className="text-2xl mb-3 w-[80%]"> Category Filter </h1>

        <ul className=" w-[80%]">
          <li className=" mb-3 flex items-center "><span className="rounded-full inline w-[15px] mr-2 h-[15px] bg-blue-100"></span> {" "}meaw</li>
          <li className=" mb-3 flex items-center "><span className="rounded-full inline w-[15px] mr-2 h-[15px] bg-green-100"></span> {" "}meaw</li>
          <li className=" mb-3 flex items-center "><span className="rounded-full inline w-[15px] mr-2 h-[15px] bg-red-100"></span> {" "}meaw</li>
        </ul>

      </nav>

      <div className="w-[85%] h-full  p-5 pt-[5%]">

            <div className="card p-10  border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col">

              <div className="mb-3 hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}></div>
              <h1 className="hover:text-blue-300"> Lorem ipsum dolor</h1>

            </div>


      </div>

    </div>


  )
}

export default App
