import { useState } from "react";
import { ArrowLeft, Heading } from "lucide-react";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";
import { useNavigate } from "react-router-dom";

const DepositHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactions = [
    {
      date: "27/02/2025 07:06:19 PM",
      amount: 500,
      orderId: "ZUP06633792692TkQL",
      requestType: "Credit",
      creditAt: "27/02/2025 07:27:04 PM",
      status: "Failed",
    },
    {
      date: "27/02/2025 07:05:04 PM",
      amount: 500,
      orderId: "ZUP06633048779zp58",
      requestType: "Credit",
      creditAt: "27/02/2025 07:26:03 PM",
      status: "Failed",
    },
    {
      date: "22/02/2025 12:42:43 PM",
      amount: 100,
      orderId: "STR0208363529R14ey",
      requestType: "Credit",
      creditAt: "22/02/2025 12:43:59 PM",
      status: "Success",
    },
  ];


  const navigate = useNavigate();
 

  return (
    <div className="">
      <Header/>
    <div className="min-h-screen py-24 flex flex-col items-center bg-gray-100 px-4 ">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
         {/* Header */}
  <ArrowLeft
  className="text-gray-700  cursor-pointer hover:text-gray-900 transition"
  size={32}
  onClick={() => navigate(-1)} // Go back to previous page
/>
        <h2 className="ml-2 text-lg font-semibold ">DEPOSIT HISTORY</h2>
      </div>

      {/* Transactions List */}
      <div className="w-full max-w-md">
        {transactions.map((txn, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">{txn.date}</p>
              <p
                className={`text-xs font-semibold ${
                  txn.status === "Failed" ? "text-red-500" : "text-green-500"
                }`}
              >
                {txn.status}
              </p>
            </div>
            <p className="text-xl font-bold text-orange-600 mt-1">₹{txn.amount}</p>
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-medium">Order Id:</span> {txn.orderId}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-medium">Request Type:</span> {txn.requestType}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-medium">Credit At:</span> {txn.creditAt}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center space-x-4 mt-4">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-lg font-semibold">{currentPage}</span>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
    <NavbarBottom/>
    </div>
  );
};

export default DepositHistory;
