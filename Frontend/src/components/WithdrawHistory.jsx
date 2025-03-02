import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WithdrawHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    {
      date: "28/02/2025 02:15:30 PM",
      amount: 300,
      orderId: "WTHD789654123ABC",
      requestType: "Debit",
      processedAt: "28/02/2025 02:45:10 PM",
      status: "Success",
    },
    {
      date: "25/02/2025 11:30:10 AM",
      amount: 600,
      orderId: "WTHD123987456XYZ",
      requestType: "Debit",
      processedAt: "25/02/2025 12:00:45 PM",
      status: "Pending",
    },
    {
      date: "20/02/2025 04:20:05 PM",
      amount: 200,
      orderId: "WTHD654321789PQR",
      requestType: "Debit",
      processedAt: "20/02/2025 04:40:20 PM",
      status: "Failed",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-6">
      {/* Header */}
      <div className="w-full flex items-center justify-start mb-4">
        <Link to="/" className="p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft className="text-gray-700 cursor-pointer" size={24} />
        </Link>
        <h2 className="ml-2 text-lg font-semibold text-gray-800">WITHDRAW HISTORY</h2>
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
                  txn.status === "Failed"
                    ? "text-red-500"
                    : txn.status === "Pending"
                    ? "text-yellow-500"
                    : "text-green-500"
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
              <span className="font-medium">Processed At:</span> {txn.processedAt}
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
  );
};

export default WithdrawHistory;
