import React from "react";

const ChangeMPIN = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Header */}
      <div className="w-full max-w-md">
        <div className="flex items-center space-x-2 py-4">
          <button className="p-2 rounded-full bg-gray-200">
            ←
          </button>
          <h2 className="text-lg font-semibold">Change MPIN</h2>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Enter Old MPIN"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter New MPIN"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Confirm New MPIN"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Update Button */}
        <button className="w-full mt-6 p-3 text-white bg-orange-500 rounded-full text-lg font-semibold shadow-md hover:bg-orange-600 transition-all">
          Update
        </button>
      </div>
    </div>
  );
};

export default ChangeMPIN;
