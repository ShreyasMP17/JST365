import { Home, Wallet, MessageCircle, BookOpen, PlayCircle, Bell, Globe2, Phone,  PhoneCall, List, ChartArea, MessageCircleCode, LucideGamepad, GalleryThumbnails, LayoutTemplate } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
const Header = ()=>{
    const [notifications, setNotifications] = useState([
        "New Game Update",
        "Bonus Added to Wallet",
      ]);
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleNotifications = () => {
        setIsOpen(!isOpen);
      };
    
    return(
        <div className="fixed top-0 left-0 w-full z-50 p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-between items-center shadow-md">
  <Sidebar />
  {/* <h1 className="pl-7 text-xl ">
  <img src="/dlogo.png" alt="Logo" className="w-20 h-15 mr-2" /> {/* Small logo image */}
{/* </h1> */} 
 <h1 className="pl-7 text-3xl font-bold text-black flex items-center">
    
    JST <span className="text-customBlue pl-1">365</span> {/* Color added to 365 */}
  </h1>
  <div className="flex items-center space-x-4">
  <button className="bg-black px-3 py-2 rounded-lg text-white font-bold flex items-center space-x-2">
  <span className="bg-gradient-to-r from-[#ffba43] via-[#ffea00] to-[#ffba43] p-1 rounded-full">
    <Wallet size={16} className="text-black" />
  </span>
  <span>₹1200.0</span>
</button>


    {/* Notification Icon */}
    <div className="relative">
      <button onClick={toggleNotifications}>
        <Bell size={24} className="text-gray-700" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-2">
          {notifications.length > 0 ? (
            notifications.map((note, index) => (
              <p key={index} className="text-sm text-gray-700 p-2 border-b last:border-none">
                {note}
              </p>
            ))
          ) : (
            <p className="text-sm text-gray-500 p-2">No new notifications</p>
          )}
        </div>
      )}
    </div>
  </div>
</div>
    )
};
export default Header;