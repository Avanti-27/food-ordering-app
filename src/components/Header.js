import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClick = () => {
    if (btnText === "Login") {
      setBtnText("Logout");
    } else {
      setBtnText("Login");
    }
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg text-xl font-serif">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center m-5">
        <ul className="flex p-5 m-5">
          <li className="px-8">Online Status: {onlineStatus ? "✅" : "🛑"}</li>
          <li className="px-8">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-8">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-8">
            <Link to={"/contact"}>Conatct Us</Link>
          </li>
          <li className="px-8 font-bold text-xl">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
        </ul>
        <button className="login-btn" onClick={handleClick}>
          {btnText}
        </button>
        <div className="px-8">{data.loggedInUser}</div>
      </div>
    </div>
  );
};

export default Header;
