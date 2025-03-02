import React from "react";
import NavbarBottom from "./NavbarBottom";

const charts = [
  { title: "Jodi Charts", items: ["SURYA MORNING", "BALAJI MORNING", "SRIDEVI", "TIME BAZAR", "MADHUR DAY", "RAJDHANI DAY", "MILAN DAY", "BALAJI DAY", "KALYAN", "SRIDEVI NIGHT", "MADHUR NIGHT", "BALAJI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"] },
  { title: "Pana Charts", items: ["SURYA MORNING", "BALAJI MORNING", "SRIDEVI", "TIME BAZAR", "MADHUR DAY", "RAJDHANI DAY", "MILAN DAY", "BALAJI DAY", "KALYAN", "SRIDEVI NIGHT", "MADHUR NIGHT", "BALAJI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"] },
  { title: "Milan Starline Charts", items: ["All Milan Starline Chart", "10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM", "05:30 PM", "06:30 PM", "07:30 PM", "08:30 PM", "09:30 PM"] },
  { title: "Milan Jackpot Charts", items: ["All Milan Jackpot Chart", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"] }
];

const ChartList = () => {
  return (
    <div className=" ">
      {charts.map((chart, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-bold text-center mb-2">{chart.title}</h2>
          <div className="bg-white rounded-lg shadow-md p-2 space-y-2">
            {chart.items.map((item, idx) => (
              <div key={idx} className="flex items-center p-2 border-b last:border-none">
                <div className="w-1 h-5 bg-yellow-400 mr-2"></div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <NavbarBottom/>
    </div>
  );
};

export default ChartList;
