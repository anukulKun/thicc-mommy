import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Details from "./Details";

function Home() {
  return (
    <>
      <Nav />
      <div className="w-[85%] h-full  p-5 pt-[5%]">
        <Link to="/details/1 "className="card p-10  border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col">
          <div
            className="mb-3 hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300"> Lorem ipsum dolor</h1>
        </Link>
      </div>
    </>
  );
}

export default Home;
