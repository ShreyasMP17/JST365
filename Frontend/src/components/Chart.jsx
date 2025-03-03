import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarBottom from "./NavbarBottom";
import Header from "./Header";
import { ArrowUp, ArrowUpNarrowWide } from "lucide-react";

const charts = [
  {
    title: "Jodi Charts",
    items: ["SURYA MORNING", "BALAJI MORNING", "SRIDEVI", "TIME BAZAR", "MADHUR DAY", "RAJDHANI DAY", "MILAN DAY", "BALAJI DAY", "KALYAN", "SRIDEVI NIGHT", "MADHUR NIGHT", "BALAJI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"],
  },
  {
    title: "Pana Charts",
    items: ["SURYA MORNING", "BALAJI MORNING", "SRIDEVI", "TIME BAZAR", "MADHUR DAY", "RAJDHANI DAY", "MILAN DAY", "BALAJI DAY", "KALYAN", "SRIDEVI NIGHT", "MADHUR NIGHT", "BALAJI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"],
  },
  {
    title: "Milan Starline Charts",
    items: ["All Milan Starline Chart", "10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM", "05:30 PM", "06:30 PM", "07:30 PM", "08:30 PM", "09:30 PM"],
  },
  {
    title: "Milan Jackpot Charts",
    items: ["All Milan Jackpot Chart", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
  },
];

const ChartList = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [search, setSearch] = useState("");

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="">
        <Header />
      </div>

      {/* Search Bar */}
      <div className=" pt-24 mx-4 max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search charts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
        />
      </div>

      {/* Charts */}
      <div className="max-w-2xl mx-auto px-4">
        {charts.map((chart, index) => (
          <div key={index} className="mb-8">
            {/* Chart Title */}
            <h2 className="text-2xl font-bold text-center text-yellow-500 bg-gray-900 py-2 rounded-lg mb-4">
              {chart.title}
            </h2>

            {/* Chart Items */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              {chart.items
                .filter((item) => item.toLowerCase().includes(search.toLowerCase())) // Search Filter
                .map((item, idx) => (
                  <Link
                    to={`/chart/${item.replace(/\s+/g, "-").toLowerCase()}`} // Dynamic links
                    key={idx}
                    onClick={() => handleClick(idx)}
                    className={`block text-center text-lg font-semibold py-2 border-b last:border-none transition
                      ${
                        activeLink === idx
                          ? "bg-yellow-500 text-white scale-105 shadow-md"
                          : "text-gray-800 hover:bg-yellow-200 hover:scale-105 hover:shadow-md"
                      }`}
                  >
                    {item}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-20  right-6 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
      >
        <ArrowUp />
      </button>

      {/* Bottom Navbar */}
      <NavbarBottom />
    </div>
  );
};

export default ChartList;
