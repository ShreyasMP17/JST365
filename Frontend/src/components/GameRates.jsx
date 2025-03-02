import React from "react";

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

  const jackpotRates = [
    { name: "Jodi", value: "100.0" },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen shadow-lg rounded-md">
      <div className="flex items-center mb-4">
        <button className="mr-2 text-lg">&#8592;</button>
        <h2 className="text-lg font-bold">GAME RATES</h2>
      </div>
      <h3 className="text-center text-orange-500 font-semibold text-lg mb-2">Game Rates</h3>
      <div className="divide-y divide-gray-300">
        {gameRates.map((rate, index) => (
          <div key={index} className="flex justify-between py-2">
            <span>{rate.name}</span>
            <span className="font-semibold">{rate.value}</span>
          </div>
        ))}
      </div>
      
      <h3 className="text-center text-orange-500 font-semibold text-lg mt-4">Starline Rates</h3>
      <div className="divide-y divide-gray-300">
        {starlineRates.map((rate, index) => (
          <div key={index} className="flex justify-between py-2">
            <span>{rate.name}</span>
            <span className="font-semibold">{rate.value}</span>
          </div>
        ))}
      </div>

      <h3 className="text-center text-orange-500 font-semibold text-lg mt-4">Jackpot Rates</h3>
      <div className="divide-y divide-gray-300">
        {jackpotRates.map((rate, index) => (
          <div key={index} className="flex justify-between py-2">
            <span>{rate.name}</span>
            <span className="font-semibold">{rate.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameRates;
