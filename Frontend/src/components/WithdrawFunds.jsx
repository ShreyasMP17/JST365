import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import PopWithdrawFunds from "./PopupTerms";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";
import { useNavigate } from "react-router-dom";

const WithdrawFunds = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  return (
    <div className="">
      <Header/>
    <div className=" pt-24 items-center bg-gray-100 px-4 ">
    <ArrowLeft
        className="text-gray-700  cursor-pointer hover:text-gray-900 transition"
        size={32}
        onClick={() => navigate(-1)} // Go back to previous page
      />
      {/* Header */}
      <div className="w-full mb-4">
        <h2 className="ml-2 text-center text-2xl font-semibold ">WITHDRAW FUNDS</h2>
      </div>

      {/* User Info */}
      <div className="w-full max-w-md bg-orange-500 text-white rounded-xl p-4 text-center">
        <h3 className="text-lg font-semibold">Hunk</h3>
        <p className="text-sm">+91 1234567890</p>
        <div className="bg-black text-white p-2 mt-2 rounded-lg">
          <p className="text-sm">Available Balance</p>
          <p className="text-lg font-bold">₹99.0</p>
        </div>
      </div>

      {/* Enter Amount */}
      <div className="mt-6 w-full max-w-md text-center">
        <h4 className="text-gray-700 text-lg font-semibold">Enter Amount</h4>
        <input
          type="number"
          className="text-3xl font-bold text-gray-900 mt-2 w-full text-center bg-transparent border-none focus:outline-none"
          placeholder="₹ ____"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Send Request Button */}
      <button
        className="mt-6 w-full max-w-md bg-orange-500 text-white text-lg font-semibold py-3 rounded-lg shadow-md"
      >
        Send Request
      </button>
      <PopWithdrawFunds/>
    </div>
    <NavbarBottom/>
    </div>
  );
};

export default WithdrawFunds;
