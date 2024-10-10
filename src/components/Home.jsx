import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] h-full flex flex-wrap overflow-x-hidden overflow-y-auto  p-5 pt-[5%]">
        {products.map((p, i) => (
          <Link
            key={p.id}
            to={`/details/${p.id}`}
            className="card p-10  border shadow rounded w-[18%] h-[45vh] flex justify-center items-center flex-col"
          >
            <div
              className="mb-3 hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center "
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>

            <h1 className="hover:text-blue-300">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
