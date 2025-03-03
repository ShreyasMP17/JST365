import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const GameResultHistory = () => {
  // State for selected date
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // Sample game results data
  const gameResults = [
    "SURYA MORNING",
    "BALAJI MORNING",
    "SRIDEVI",
    "TIME BAZAR",
    "MADHUR DAY",
    "RAJDHANI DAY",
    "MILAN DAY",
    "BALAJI DAY",
    "KALYAN",
    "SRIDEVI NIGHT",
    "MADHUR NIGHT",
    "BALAJI NIGHT",
  ];

  const navigate = useNavigate();

  return (
    <div className="">
      <Header/>
    <div className="min-h-screen py-24 bg-gray-100 px-4 py-6">
      {/* Header Section */}
      <div className="flex items-center space-x-3 mb-4">
       {/* Clickable Arrow Button */}
      <ArrowLeft
        className="text-gray-700  cursor-pointer hover:text-gray-900 transition"
        size={24}
        onClick={() => navigate(-1)} // Go back to previous page
      />
        <h2 className="text-lg font-semibold text-gray-800">GAME RESULT HISTORY</h2>
      </div>

      {/* Date Picker Section */}
      <div className="flex items-center justify-between bg-white shadow-md p-3 rounded-lg">
        <span className="text-gray-700 font-medium">Select Date:</span>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="bg-orange-500 text-white px-4 py-2 rounded-full cursor-pointer"
        />
      </div>

      {/* Game Results List */}
      <div className="mt-4 space-y-3">
        {gameResults.map((game, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
          >
            <span className="text-gray-800 font-medium">{game}</span>
            <span className="text-orange-500 font-semibold">***-**-***</span>
          </div>
        ))}
      </div>
    </div>
    <NavbarBottom/>
    </div>
  );
};

export default GameResultHistory;
