import { FaArrowLeft, FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";

const ChatSupport = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center p-3 shadow-md bg-white">
        <button className="text-gray-700 text-xl">
          <FaArrowLeft />
        </button>
        <div className="flex items-center ml-3">
          <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full text-sm font-semibold">
            C
          </div>
          <div className="ml-3">
            <p className="text-gray-800 font-semibold text-sm">Chat Support</p>
            <p className="text-green-500 text-xs italic">● online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages (Empty for Now) */}
      <div className="flex-1 p-4"></div>

      {/* Chat Input Box */}
      <div className="p-3 bg-white shadow-md flex items-center space-x-3 rounded-t-xl">
        <button className="text-gray-500">
          <FaPaperclip size={18} />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 border-none outline-none bg-gray-100 rounded-full px-4 py-2 text-sm"
        />
        <button className="text-gray-500">
          <FaMicrophone size={18} />
        </button>
        <button className="bg-orange-500 text-white p-2 rounded-full">
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatSupport;
