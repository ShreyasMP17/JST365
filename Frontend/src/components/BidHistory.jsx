import { useState } from "react";
import { ArrowLeft, Filter } from "lucide-react";

const BidHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Set number of items per page

  const bids = [
    {
      gameType: "Single Digit",
      digit: 1,
      points: 1,
      bidId: "BtwblDGTgiUMsxUIbyxVA2b",
      bidDate: "27/02/2025",
      transactionTime: "27/02/2025 05:53:01 PM",
      statusMessage: "Better Luck Next Time 👎",
    },
    {
      gameType: "Single Digit",
      digit: 2,
      points: 3,
      bidId: "ABC123XYZ456",
      bidDate: "26/02/2025",
      transactionTime: "26/02/2025 04:30:00 PM",
      statusMessage: "Better Luck Next Time 👎",
    },
    {
      gameType: "Double Digit",
      digit: 12,
      points: 5,
      bidId: "XYZ789PQR321",
      bidDate: "25/02/2025",
      transactionTime: "25/02/2025 03:45:10 PM",
      statusMessage: "You Won 🎉",
    },
  ];

  // Pagination Logic
  const totalPages = Math.ceil(bids.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBids = bids.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-6">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ArrowLeft className="text-gray-700 cursor-pointer" size={24} />
          <h2 className="ml-2 text-lg font-semibold text-gray-800">BID HISTORY</h2>
        </div>
        <Filter className="text-gray-700 cursor-pointer" size={24} />
      </div>

      {/* Bid Entries */}
      <div className="w-full max-w-md">
        {paginatedBids.map((bid, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-4">
            {/* Title */}
            <div className="bg-orange-500 text-white text-center font-semibold py-2 rounded-t-lg">
              MADHUR NIGHT (Open)
            </div>

            {/* Table */}
            <div className="p-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Game Type</span>
                <span>Digit</span>
                <span>Points</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700 mt-1">
                <span>{bid.gameType}</span>
                <span>{bid.digit}</span>
                <span>{bid.points}</span>
              </div>

              <div className="text-xs text-gray-600 mt-3">
                <p>
                  <span className="font-medium">Bid ID:</span> {bid.bidId}
                </p>
                <p>
                  <span className="font-medium">Bid Date:</span> {bid.bidDate}
                </p>
                <p>
                  <span className="font-medium">Transaction Time:</span> {bid.transactionTime}
                </p>
              </div>

              {/* Status Message */}
              <p
                className={`text-center text-sm mt-2 ${
                  bid.statusMessage.includes("Won") ? "text-green-500" : "text-red-500"
                }`}
              >
                {bid.statusMessage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center space-x-4 mt-4">
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-lg font-semibold">{currentPage}</span>
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white"
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BidHistory;
