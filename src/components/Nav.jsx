import React from "react";

function Nav() {
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 border rounded border-blue-200 text-blue-400"
        href="/create"
      >
        Add new Project
      </a>

      <hr className="w-[80%] my-3" />

      <h1 className="text-2xl mb-3 w-[80%]"> Category Filter </h1>

      <ul className=" w-[80%]">
        <li className=" mb-3 flex items-center ">
          <span className="rounded-full inline w-[15px] mr-2 h-[15px] bg-blue-100"></span>{" "}
          meaw
        </li>
        <li className=" mb-3 flex items-center ">
          <span className="rounded-full inline w-[15px] mr-2 h-[15px] bg-green-100"></span>{" "}
          meaw
        </li>
        <li className=" mb-3 flex items-center ">
          <span className="rounded-full inline w-[15px] mr-2 h-[15px] bg-red-100"></span>{" "}
          meaw
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
