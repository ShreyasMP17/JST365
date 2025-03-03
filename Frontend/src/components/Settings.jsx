import React, { useState } from "react";
import NavbarBottom from "./NavbarBottom";
import Header from "./Header";

const settingsData = [
  "Main Notification",
  "Game Notification",
  "Starline Notification",
  "Jackpot Notification",
];

const gameNotificationData = [
  "MAIN BAZAR", "SRIDEVI", "KALYAN NIGHT", "MILAN NIGHT",
  "TIME BAZAR", "MILAN DAY",  "SUPREME DAY", "MADHUR DAY",
  "KALYAN", "RAJDHANI NIGHT", "RAJDHANI DAY", "MADHUR NIGHT",
  "SUPREME NIGHT", "SRIDEVI NIGHT", "SURYA MORNING", "BALAJI MORNING",
  "BALAJI DAY", "BALAJI NIGHT",
];

const languageOptions = ["English", "हिंदी", "ગુજરાતી", "ಕನ್ನಡ"];
const typeOptions = ["Basic", "Advanced", "Custom"];

const Settings = () => {
  const [notifications, setNotifications] = useState(
    settingsData.reduce((acc, item) => ({ ...acc, [item]: true }), {})
  );
  const [gameNotifications, setGameNotifications] = useState(
    gameNotificationData.reduce((acc, item) => ({ ...acc, [item]: true }), {})
  );
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedType, setSelectedType] = useState("Basic");

  const toggleNotification = (type, item) => {
    if (type === "settings") {
      setNotifications({ ...notifications, [item]: !notifications[item] });
    } else {
      setGameNotifications({ ...gameNotifications, [item]: !gameNotifications[item] });
    }
  };

  return (
    <div className="  bg-gray-100">
      <Header />
      <div className="flex-1 py-24 overflow-y-auto p-4  max-w-md mx-auto bg-gray-50">
        <h2 className="text-xl text-center font-bold mb-4">SETTINGS</h2>
        {/* Type Selection */}
        <div className="bg-orange-500 text-white p-2 rounded-md font-semibold">Select Type</div>
        <div className="bg-white p-4 shadow rounded-md mt-2">
          <select
            className="w-full p-2 border rounded-md"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {typeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Notification Settings */}
        <div className="bg-orange-500 text-white p-2 rounded-md font-semibold mt-4">Notification Settings</div>
        <div className="bg-white p-4 shadow rounded-md mt-2">
          {settingsData.map((item) => (
            <div key={item} className="flex justify-between py-2 border-b">
              <span>{item}</span>
              <input
                type="checkbox"
                className="toggle-checkbox"
                checked={notifications[item]}
                onChange={() => toggleNotification("settings", item)}
              />
            </div>
          ))}
        </div>

        {/* Game Notification Settings */}
        <div className="bg-orange-500 text-white p-2 rounded-md font-semibold mt-4">Game Notification Settings</div>
        <div className="bg-white p-4 shadow rounded-md mt-2">
          {gameNotificationData.map((item) => (
            <div key={item} className="flex justify-between py-2 border-b">
              <span>{item}</span>
              <input
                type="checkbox"
                className="toggle-checkbox"
                checked={gameNotifications[item]}
                onChange={() => toggleNotification("game", item)}
              />
            </div>
          ))}
        </div>

        {/* Language Settings */}
        <div className="bg-orange-500 text-white p-2 rounded-md font-semibold mt-4">Language Settings</div>
        <div className="bg-white p-4 shadow rounded-md mt-2">
          {languageOptions.map((language) => (
            <div key={language} className="flex items-center space-x-2 py-2">
              <input
                type="radio"
                name="language"
                checked={selectedLanguage === language}
                onChange={() => setSelectedLanguage(language)}
              />
              <span>{language}</span>
            </div>       
          ))} 
        </div>
      </div>
      <NavbarBottom/>
    </div>
  );
};

export default Settings;
