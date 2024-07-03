import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SignUp from "./SignUp";

function Header() {
    const [signBtn, setSignBtn] = useState("SignUp")
    const handleRegisterBtn = () => {
        signBtn==="SignUp"?(setSignBtn("Login")):setSignBtn("SignUp")
    }
  return (
    <div className="w-full border-b-2 outline-none border-zinc-200">
      <div className="w-4/5 mx-auto flex justify-between items-center ">
        <div className="w-1/12">
          <img
            className="w-full"
            src="https://i.pinimg.com/originals/02/fd/5c/02fd5cc15841730936c0c5c555dae3a9.png"
            alt="Food Delivery Logo"
          />
        </div>

        <div className="">
          <ul className="flex space-x-4  text-[#CD2835] p-2 font-semibold">
            <li className=" bg-red-600 w-20 cursor-pointer p-2 text-center rounded-md text-white hover:bg-red-500 transition-colors duration-300">
              <Link to={"/"}>Home</Link>
            </li>
            <li
              onClick={handleRegisterBtn}
              className=" bg-red-600 w-20 cursor-pointer p-2 text-center rounded-md text-white hover:bg-red-500 transition-colors duration-300"
            >
              <Link to={signBtn}>{signBtn}</Link>
            </li>
            <li className="  p-2 rounded-md text-red transition-colors duration-300">
              Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
