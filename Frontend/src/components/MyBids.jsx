import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const MyBids = () => {
  const navigate = useNavigate(); // Hook for navigation

  const historyItems = [
    { name: "Game Bid History", path: "/bid-history" },
    { name: "Milan Starline Bid History", path: "/milan-starline-history" },
    { name: "Milan Jackpot Bid History", path: "/milan-jackpot-history" },
    { name: "Game Result History", path: "/game-result-history" },
    { name: "Milan Starline Result History", path: "/starline-result-history" },
    { name: "Milan Jackpot Result History", path: "/milan-jackpot-result" },
  ];

  return (
    <div className="">
      <Header />
      <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-100 p-4">
        {/* Header Section */}
        <div className="text-center p-3 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">HISTORY</h2>
        </div>

        {/* History Items */}
        <div className="mt-5 space-y-3">
          {historyItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-white rounded-lg shadow-md cursor-pointer hover:bg-orange-100 transition"
              onClick={() => navigate(item.path)} // Navigate on click
            >
              {/* Icon */}
              <div className="bg-orange-500 text-white p-2 rounded-full">
                <FaFileAlt />
              </div>
              {/* Text */}
              <span className="ml-3 font-medium text-gray-800">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default MyBids;

