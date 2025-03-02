import { FaArrowLeft, FaWallet, FaFileAlt } from "react-icons/fa";

const MyBids = () => {
  const historyItems = [
    "Game Bid History",
    "Milan Starline Bid History",
    "Milan Jackpot Bid History",
    "Game Result History",
    "Milan Starline Result History",
    "Milan Jackpot Result History",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between p-3 bg-white shadow-md rounded-lg">
        {/* Back Button */}
        <button className="text-gray-700 text-xl">
          <FaArrowLeft />
        </button>
        <h2 className="text-lg font-semibold">HISTORY</h2>
        {/* Wallet Section */}
        <div className="flex items-center space-x-2 bg-black text-white px-3 py-1 rounded-full">
          <FaWallet />
          <span>₹99.0</span>
        </div>
      </div>

      {/* History Items */}
      <div className="mt-5 space-y-3">
        {historyItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-white rounded-lg shadow-md"
          >
            {/* Icon */}
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <FaFileAlt />
            </div>
            {/* Text */}
            <span className="ml-3 font-medium text-gray-800">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBids;
