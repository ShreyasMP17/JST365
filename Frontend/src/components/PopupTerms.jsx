import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const PopWithdrawFunds = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-6">
      {/* Popup (Terms & Conditions) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 max-w-md rounded-lg p-6 text-gray-700">
            <h2 className="text-lg font-semibold text-center bg-orange-500 text-white py-2 rounded-t-lg">
              Terms and Conditions
            </h2>
            <ul className="mt-3 text-sm space-y-2">
              <li>• Minimum Withdraw is 500/- RS</li>
              <li>• Maximum Withdraw is 25 Lakhs Per Day</li>
              <li>• 2 Withdraw Requests Accepted Per Day</li>
              <li>• Per day you can send 2 withdrawal requests of max 1 Lakh automatically</li>
              <li>• Above 100000 requires manual request</li>
              <li>• 1st Withdraw Timing: 10:00 AM - 05:00 PM</li>
              <li>• 2nd Withdraw Timing: 05:00 PM - 10:00 PM</li>
              <li>• Process Time: 1 Hour to 48 Hours (Bank Server Dependent)</li>
              <li>• Withdraw is available 7 days a week</li>
            </ul>
            <button
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
              onClick={() => setShowPopup(false)}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopWithdrawFunds;
