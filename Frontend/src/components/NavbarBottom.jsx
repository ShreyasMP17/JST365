import { Home, Wallet, MessageCircleCode, List, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarBottom = () => {
  
  return (
    <div className="">
      {/* Bottom Navbar */}
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex justify-around items-center shadow-lg fixed bottom-0 w-full">
        
        <Link to="/my-bids" className="flex flex-col items-center">
          <List size={24} className="text-gray-700" />
          <span className="text-xs text-gray-700">My Bids</span>
        </Link>

        <Link to="/pass-book" className="flex flex-col items-center">
          <BookOpen size={24} className="text-gray-700" />
          <span className="text-xs text-gray-700">PassBook</span>
        </Link>

        <Link to="/" className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-[#ffba43] via-[#ffea00] to-[#ffba43] text-white rounded-full p-2">
            <Home size={30} className="drop-shadow-md" />
          </div>
        </Link>

        <Link to="/add-funds" className="flex flex-col items-center">
          <Wallet size={24} className="text-gray-700" />
          <span className="text-xs text-gray-700">Add Funds</span>
        </Link>

        <Link to="/chat-support" className="flex flex-col items-center">
          <MessageCircleCode size={24} className="text-gray-700" />
          <span className="text-xs text-gray-700">Chat</span>
        </Link>

      </div>
    </div>
  );
};

export default NavbarBottom;
