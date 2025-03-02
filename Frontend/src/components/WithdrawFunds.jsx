import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import PopWithdrawFunds from "./PopupTerms";

const WithdrawFunds = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-6">
      {/* Header */}
      <div className="w-full flex items-center justify-start mb-4">
        <ArrowLeft className="text-gray-700 cursor-pointer" size={24} />
        <h2 className="ml-2 text-lg font-semibold text-gray-800">WITHDRAW FUNDS</h2>
      </div>

      {/* User Info */}
      <div className="w-full max-w-md bg-orange-500 text-white rounded-xl p-4 text-center">
        <h3 className="text-lg font-semibold">Hunk</h3>
        <p className="text-sm">+917019401035</p>
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
  );
};

export default WithdrawFunds;
