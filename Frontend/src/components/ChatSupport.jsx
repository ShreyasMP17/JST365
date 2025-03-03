import { useState, useRef } from "react";
import { FaArrowLeft, FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const ChatSupport = () => {
  const [messages, setMessages] = useState([]);  // Stores chat messages
  const [input, setInput] = useState("");  // Stores user input
  const chatEndRef = useRef(null);

  // Function to send a message
  const sendMessage = () => {
    if (input.trim() === "") return; // Prevent empty messages

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulating a bot response
    setTimeout(() => {
      const botReply = { text: "Thanks for your message! We’ll get back to you.", sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    // Auto-scroll to latest message
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <div className="">
      <Header />
      {/* Header */}
      <div className="flex pt-24  items-center p-3 shadow-md bg-white fixed top-0 w-full ">
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

      {/* Chat Messages */}
      <div className="flex-1 p-4 mt-36 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 max-w-xs rounded-lg ${
              msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-gray-700 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Chat Input Box */}
      <div className="p-3 bg-white shadow-md flex items-center space-x-3 rounded-t-xl fixed bottom-20 w-full">
        <button className="text-gray-500">
          <FaPaperclip size={18} />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 border-none outline-none bg-gray-100 rounded-full px-4 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="text-gray-500">
          <FaMicrophone size={18} />
        </button>
        <button onClick={sendMessage} className="bg-orange-500 text-white p p-2 rounded-full">
          <FaPaperPlane size={18} />
        </button>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default ChatSupport;
