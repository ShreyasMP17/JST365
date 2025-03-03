import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const transactions = [
  {
    description: "BID MADHUR NIGHT : Single Digit Open [ 1 ]",
    points: "-₹1",
    pointsColor: "text-red-500",
    balance: "₹99",
    date: "27/02/2025 06:53:01 PM",
  },
  {
    description: "ADD FUND: UPI to STR [ STRO208363529R14ey ]",
    points: "+₹100",
    pointsColor: "text-green-500",
    balance: "₹100",
    date: "22/02/2025 12:42:43 PM",
  },
];

const Passbook = () => {
  return (
    <div className="">
      <Header/>
    <div className="min-h-screen py-24 bg-white p-4">
      {/* Header */}
      <div className=" text-center p-3 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold">PASSBOOK</h2>
        <div className="w-6" /> {/* Empty div for spacing */}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 bg-orange-500 text-white font-semibold p-2 mt-4 rounded-lg text-sm">
        <span>Description</span>
        <span className="text-center">Points</span>
        <span className="text-right">Balance</span>
      </div>

      {/* Transactions List */}
      <div className="mt-3 space-y-3">
        {transactions.map((item, index) => (
          <div key={index} className="p-3 border-b border-gray-200">
            <p className="text-gray-800 font-medium">{item.description}</p>
            <div className="grid grid-cols-3 mt-1 text-sm text-gray-600">
              <span className={item.pointsColor}>{item.points}</span>
              <span className="text-right">{item.balance}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{item.date}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="fixed bottom-5 left-0 w-full flex justify-between items-center px-5">
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full shadow-md">
          <FaChevronLeft className="mr-2" /> Prev
        </button>
        <span className="bg-black text-white px-3 py-1 rounded-full">1</span>
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full shadow-md">
          Next <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
    <NavbarBottom/>
    </div>
  );
};

export default Passbook;
