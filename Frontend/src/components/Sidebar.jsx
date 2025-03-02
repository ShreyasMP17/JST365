import React, { useState } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

  const NavItem = ({ icon, text, path }) => (
    <Link
      to={path}
      className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );

  return (
    <div className={`relative ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-500 rounded-full border-2 border-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>

      {/* Sidebar Drawer - Full Height Fixed */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg p-5 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center my-5">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold">H</span>
          </div>
          <h2 className="text-lg font-semibold mt-2">Hunk</h2>
          <p className="text-gray-500 text-sm">+91 123456789</p>
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
          <NavItem icon={<Share2 />} text="Share Application" path="/share-app" />
          <NavItem icon={<LogOut />} text="Logout" path="/logout" />
        </nav>

        {/* Dark Mode Toggle */}
        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <span>Dark Mode</span>
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
