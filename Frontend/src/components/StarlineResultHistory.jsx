import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const StarlineResultHistory = () => {
  // State for selected date
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // Sample time slots
  const timeSlots = [
    "10:30 AM",
    "11:30 AM",
    "12:30 PM",
    "01:30 PM",
    "02:30 PM",
    "03:30 PM",
    "04:30 PM",
    "05:30 PM",
    "06:30 PM",
    "07:30 PM",
    "08:30 PM",
    "09:30 PM",
  ];
  const navigate = useNavigate();

  return (
    <div className="">
      <Header/>
    <div className="min-h-screen py-24 bg-gray-100 px-4 ">
      {/* Header Section */}
      <div className="flex items-center space-x-3 mb-4">
        {/* Clickable Arrow Button */}
      <ArrowLeft
        className="text-gray-700  cursor-pointer hover:text-gray-900 transition"
        size={24}
        onClick={() => navigate(-1)} // Go back to previous page
      />
        <h2 className="text-lg font-semibold text-gray-800">STARLINE RESULT HISTORY</h2>
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

      {/* Time Slots List */}
      <div className="mt-4 space-y-3">
        {timeSlots.map((time, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
          >
            <span className="text-gray-800 font-medium">{time}</span>
            <span className="text-orange-500 font-semibold">***-*</span>
          </div>
        ))}
      </div>
    </div>
    <NavbarBottom/>
    </div>
  );
};

export default StarlineResultHistory;
