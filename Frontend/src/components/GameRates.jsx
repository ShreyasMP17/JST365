import React from "react";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const GameRates = () => {
  const gameRates = [
    { name: "Single Digit", value: "9.5" },
    { name: "Red Brackets", value: "95.0" },
    { name: "Jodi Digits", value: "95.0" },
    { name: "Single Pana", value: "150.0" },
    { name: "Double Pana", value: "300.0" },
    { name: "Triple Pana", value: "900.0" },
    { name: "Half Sangam A", value: "1000.0" },
    { name: "Half Sangam B", value: "1000.0" },
    { name: "Full Sangam", value: "10000.0" },
  ];

  const starlineRates = [
    { name: "Single Digit", value: "10.0" },
    { name: "Single Pana", value: "160.0" },
    { name: "Double Pana", value: "320.0" },
    { name: "Triple Pana", value: "1000.0" },
  ];

  const jackpotRates = [{ name: "Jodi", value: "100.0" }];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      <div className="flex-1 overflow-y-auto pt-16 pb-20 ">
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
          {/* Back Button */}
          <div className="flex items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">GAME RATES</h2>
          </div>

          {/* Game Rates */}
          <h3 className="text-center text-white font-semibold text-lg mb-3 p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
            Game Rates
          </h3>
          <div className="divide-y divide-gray-300">
            {gameRates.map((rate, index) => (
              <div key={index} className="flex justify-between py-2 text-gray-800">
                <span>{rate.name}</span>
                <span className="font-semibold">{rate.value}</span>
              </div>
            ))}
          </div>

          {/* Starline Rates */}
          <h3 className="text-center text-white font-semibold text-lg mt-6 mb-3 p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
            Starline Rates
          </h3>
          <div className="divide-y divide-gray-300">
            {starlineRates.map((rate, index) => (
              <div key={index} className="flex justify-between py-2 text-gray-800">
                <span>{rate.name}</span>
                <span className="font-semibold">{rate.value}</span>
              </div>
            ))}
          </div>

          {/* Jackpot Rates */}
          <h3 className="text-center text-white font-semibold text-lg mt-6 mb-3 p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
            Jackpot Rates
          </h3>
          <div className="divide-y divide-gray-300">
            {jackpotRates.map((rate, index) => (
              <div key={index} className="flex justify-between py-2 text-gray-800">
                <span>{rate.name}</span>
                <span className="font-semibold">{rate.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NavbarBottom />
    </div>
  );
};

export default GameRates;
