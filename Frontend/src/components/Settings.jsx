import React, { useState } from "react";

const settingsData = [
  "Main Notification",
  "Game Notification",
  "Starline Notification",
  "Jackpot Notification",
];

const gameNotificationData = [
  "MAIN BAZAR", "SRIDEVI", "KALYAN NIGHT", "MILAN NIGHT",
  "TIME BAZAR", "MILAN DAY", "SUPREME DAY", "MADHUR DAY",
  "KALYAN", "RAJDHANI NIGHT", "RAJDHANI DAY", "MADHUR NIGHT",
  "SUPREME NIGHT", "SRIDEVI NIGHT", "SURYA MORNING", "BALAJI MORNING",
  "BALAJI DAY", "BALAJI NIGHT",
];

const languageOptions = ["English", "हिंदी", "ગુજરાતી"];

const Settings = () => {
  const [notifications, setNotifications] = useState(
    settingsData.reduce((acc, item) => ({ ...acc, [item]: true }), {})
  );
  const [gameNotifications, setGameNotifications] = useState(
    gameNotificationData.reduce((acc, item) => ({ ...acc, [item]: true }), {})
  );
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleNotification = (type, item) => {
    if (type === "settings") {
      setNotifications({ ...notifications, [item]: !notifications[item] });
    } else {
      setGameNotifications({ ...gameNotifications, [item]: !gameNotifications[item] });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">⚙ SETTINGS</h2>

      <div className="bg-orange-500 text-white p-2 rounded-md font-semibold">Notification Settings</div>
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
  );
};

export default Settings;
