import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart2,
  Lock,
  Info,
  Star,
  ClipboardList,
  Lightbulb,
  Settings,
  Share2,
  LogOut,
  Moon,
  Sun,
  X,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const navigate = useNavigate();


  const NavItem = ({ icon, text, path }) => (
    <Link
      to={path}
      className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Share Functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this amazing app!",
          text: "Hey! Try this amazing app now.",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  // Logout Functionality
  const handleLogout = () => {
    localStorage.clear(); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  

  return (
    <div className={`relative ${darkMode ? "dark" : ""}`}>
      {/* Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-500 rounded-full border-2 border-gray-500 dark:border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} className="dark:text-white" />
      </button>

      {/* Sidebar - Fixed Full Height */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg p-5 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 dark:text-white" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>

        {/* Profile Section */}
        <div className="flex flex-row justify-around my-5">
          <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold">H</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mt-2 dark:text-white">Hunk</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">+91 123456789</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-4">
          <NavItem icon={<BarChart2 />} text="Chart" path="/chart" />
          <NavItem icon={<Lock />} text="Change MPIN" path="/change-mpin" />
          <NavItem icon={<Info />} text="How to Play" path="/how-to-play" />
          <NavItem icon={<Star />} text="Game Rates" path="/game-rates" />
          <NavItem icon={<ClipboardList />} text="Notice Board" path="/notice-board" />
          <NavItem icon={<Lightbulb />} text="User's Idea" path="/submit-ideas" />
          <NavItem icon={<Settings />} text="Settings" path="/settings" />

          {/* Share App Button */}
          <NavItem icon={<Share2 />} text="Share Application" onClick={handleShare} />

          {/* Logout Button */}
          <NavItem icon={<LogOut />} text="Logout" onClick={handleLogout} />
        </nav>

        {/* Dark Mode Toggle */}
        <div className="mt-6 flex items-center justify-between border-t pt-4 border-gray-300 dark:border-gray-600">
          <span className="dark:text-white">Dark Mode</span>
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
