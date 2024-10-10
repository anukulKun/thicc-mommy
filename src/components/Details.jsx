import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const [product, setProducts] = useState(null);

  const { id } = useParams();

  const getsingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleProduct();
  });

  return product ? (
    <div className="w-[70%] items-center flex justify-between gap-10  h-full p-[10%] m-auto">
      <img
        className="object-contain w-[50%] h-[70%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content ">
        <h1 className="text-4xl">{`${product.title}`}</h1>
        <h3 className="text-zinc-400 my-5"> {`${product.category}`}</h3>
        <h1 className="text-red-400 mb-3">{`${product.price}`}</h1>
        <p className="mb-[5%]">{`${product.description}`}</p>

        <Link className=" mr-3 py-2 px-4 border rounded border-blue-200 text-blue-400">
          Edit
        </Link>
        <Link className="py-2 px-4 border rounded border-red-200 text-red-400">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
