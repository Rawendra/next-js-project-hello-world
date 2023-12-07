import React from "react";
import Link from "next/link";

import "./Header.css";
function Header() {
  return (
    <>
      {" "}
      <div className="w-full absolute text-white -z 10">
        <nav className="container relative flex flex-wrap items-center justify-content mx-auto p-8 ">
          <Link className="font-bold text-3xl" href="/">
            NEWS BOARD
          </Link>
    
        <div className="space-x-4 text-xl float ml-auto">
          <Link href="/homepage">HOME</Link>
          <Link href="/profile">PROFILE</Link>
          <Link href="/user">USER</Link>
        </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
