import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";
import { useNavigate } from "react-router-dom";

const AddFund = () => {
  const [amount, setAmount] = useState("");

  const handleAmountClick = (value) => {
    setAmount(value.toString()); // Ensure it's always a string
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/, ""); // Allow only numbers
    setAmount(value);
  };

  const navigate = useNavigate();

  return (
    <div className="">
      <Header/>
    <div className="py-24 min-h-screen flex flex-col items-center bg-gradient-to-tr from-gray-100 to-gray-50 px-4 ">
      {/* Header */}
      <div className="w-full text-center mb-4">
        {/* Clickable Arrow Button */}
      <ArrowLeft
        className="text-gray-700  cursor-pointer hover:text-gray-900 transition"
        size={32}
        onClick={() => navigate(-1)} // Go back to previous page
      />
        <h2 className="ml-2 text-2xl font-bold text-gray-800">ADD FUND</h2>
      </div>

      {/* User Info */}
      <div className="w-full max-w-md bg-orange-500 text-white rounded-xl p-4 text-center">
        <h3 className="text-lg font-semibold">Hunk</h3>
        <p className="text-sm">+917019401035</p>
        <div className="bg-black text-white p-2 mt-2 rounded-lg">
          <p className="text-sm">Available Balance</p>
          <p className="text-lg font-bold">₹ 99.0</p>
        </div>
      </div>

      {/* Enter Amount */}
      <div className="mt-6 w-full max-w-md text-center">
        <h4 className="text-gray-700 text-lg font-semibold">Enter Amount</h4>
        <input
          type="text"
          value={amount}
          onChange={handleInputChange}
          placeholder="Enter amount"
          className="mt-2 w-full p-3 text-2xl font-bold text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Preset Amounts */}
      <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
        {[500, 1000, 1500, 2000].map((value) => (
          <button
            key={value}
            className={`p-3 text-lg rounded-lg border border-gray-300 ${
              amount === value.toString() ? "bg-orange-500 text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => handleAmountClick(value)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Pay Now Button */}
      <button
        className="mt-6 w-full max-w-md bg-orange-500 text-white text-lg font-semibold py-3 rounded-lg shadow-md"
        disabled={!amount || parseInt(amount) <= 0} // Prevents invalid input
      >
        Pay Now
      </button>
    </div>
    <NavbarBottom/>
    </div>
  );
};

export default AddFund;
