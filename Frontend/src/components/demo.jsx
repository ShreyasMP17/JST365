// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCopy, FaUniversity } from "react-icons/fa";

// const YourComponent = () => {
//   const [bankDetails, setBankDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedBank, setSelectedBank] = useState(0);

//   useEffect(() => {
//     const fetchBankDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/bank");
//         const data = Array.isArray(response.data) ? response.data : [response.data];
//         setBankDetails(data);
//       } catch (err) {
//         setError("Error fetching bank details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBankDetails();
//   }, []);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
    
//   };

//   const colors = ["bg-blue-500", "bg-green-500", "bg-orange-500"];
//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bank Details</h2>
//       {loading && <p className="text-center text-gray-600">Loading bank details...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {bankDetails.length > 0 && (
//         <div className="flex space-x-4 mb-4">
//           {bankDetails.map((_, index) => (
//   <button
//     key={index}
//     onClick={() => setSelectedBank(index)}
//     className={`px-4 py-2 rounded flex items-center space-x-2 ${
//       selectedBank === index ? `${colors[index % colors.length]} text-white` : " bg-emerald-400"
//     }`}
//   >
//     <FaUniversity className="text-3xl text-yellow-400 " />
//     <span>Account {index + 1}</span>
//   </button>
// ))}
//           <button className="px-4 py-2 bg-green-500 text-white rounded">WhatsApp Pay</button>
//         </div>
//       )}

//       {bankDetails.length > 0 ? (
//         <div className="p-4 bg-white shadow-md rounded-md w-full max-w-lg">
//           <p><strong>Bank Name:</strong> {bankDetails[selectedBank].bankName}</p>
//           <p>
//             <strong>A/C No:</strong> {bankDetails[selectedBank].accountNumber}
//             <FaCopy
//               className="inline ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
//               onClick={() => copyToClipboard(bankDetails[selectedBank].accountNumber)}
//             />
//           </p>
//           <p>
//             <strong>IFSC Code:</strong> {bankDetails[selectedBank].ifscCode}
//             <FaCopy
//               className="inline ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
//               onClick={() => copyToClipboard(bankDetails[selectedBank].ifscCode)}
//             />
//           </p>
//           <p><strong>Account Holder:</strong> {bankDetails[selectedBank].accountHolder}</p>
//           <p><strong>Min Amount:</strong> {bankDetails[selectedBank].minAmount}</p>
//           <p><strong>Max Amount:</strong> {bankDetails[selectedBank].maxAmount}</p>
//         </div>
//       ) : (
//         !loading && <p className="text-center text-gray-600">No bank details found.</p>
//       )}
//     </div>
//   );
// };

// export default YourComponent;





import React, { useState, useEffect } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from './auth';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const { currentUser, balance, logout } = useAuth();
  const navigate = useNavigate();

  
  // Add casino games with emojis
  const casinoGames = [
    { name: "Dragon Tiger", emoji: "🐉" },
    { name: "Andar Bahar", emoji: "🃏" },
    { name: "Sicbo", emoji: "🎲" },
    { name: "Roulette", emoji: "🎰" },
    { name: "Aviator", emoji: "✈️" },
    { name: "Lightening", emoji: "⚡" },
    { name: "Colour Prediction", emoji: "🎨" },
    { name: "Mines", emoji: "💣" },
    { name: "Lucky7", emoji: "🍀" },
    { name: "Poker", emoji: "♠️" },
    { name: "Baccarat", emoji: "♦️" },
    { name: "Teen Patti", emoji: "🃏" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleAuthOptions = () => {
    setShowAuthOptions(!showAuthOptions);
  };

  const handleAuthOptionClick = () => {
    // Close the dropdown when an auth option is clicked
    setShowAuthOptions(false);
  };
  
  // Calculate the header height for proper spacing
  const headerHeight = "header-height";

  return (
    <>
      {/* Static header - always visible at the top */}
      <header className="bg-orange-900 text-white shadow-md sticky top-0 left-0 right-0 z-50">
        <div className="container mx-auto p-4">
          {/* Mobile View */}
          <div className="md:hidden flex justify-between items-center">
            <div className="flex-1"></div> {/* Empty div for spacing */}
            
            <Link to="/" className="flex-1 flex justify-center">
              <img src={logo} alt="DAFA Logo" className="h-20 w-auto" />
            </Link>
            
            <div className="flex-1 flex justify-end">
              {currentUser ? ( 
                <div className="relative">
                  <button 
                    onClick={toggleAuthOptions}
                    className="bg-orange-500 text-white px-3 py-1 rounded-full"
                  >
                    👤
                  </button>
                  
                  {showAuthOptions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      <div className="p-2 border-b border-gray-200">
                        <div className="text-orange-800 font-medium">Balance:</div>
                        <div className="text-orange-900 font-bold">₹{typeof balance === 'number' ? balance.toFixed(2) : '0.00'}</div>
                      </div>
                      
                      <div className="p-2">
                        {currentUser.isAdmin ? (
                          <Link 
                            to="/admin" 
                            className="block text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded mb-2"
                            onClick={handleAuthOptionClick}
                          >
                            Admin Panel
                          </Link>
                        ) : (
                          <Link 
                            to="/dashboard" 
                            className="block text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-2"
                            onClick={handleAuthOptionClick}
                          >
                            Dashboard
                          </Link>
                        )}
                        
                        <button 
                          onClick={() => {
                            handleLogout();
                            handleAuthOptionClick();
                          }}
                          className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mb-2"
                        >
                          Logout
                        </button>
                        
                        <a 
                          href="https://drive.google.com/uc?export=download&id=1zWjm6NQtS97bKZIURE0Yr1hKXNxRTZb8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block text-center text-white px-4 py-2 rounded animate-pulse bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-all duration-500"
                          onClick={handleAuthOptionClick}
                        >
                          Download APK
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <button 
                    onClick={toggleAuthOptions}
                    className="bg-orange-500 text-white px-3 py-1 rounded-full"
                  >
                    👤
                  </button>
                  
                  {showAuthOptions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      <div className="p-2">
                        <Link 
                          to="/login" 
                          className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded mb-2"
                          onClick={handleAuthOptionClick}
                        >
                          Login
                        </Link>
                        <Link 
                          to="/register" 
                          className="block text-center bg-white hover:bg-gray-100 text-orange-500 border border-orange-500 px-4 py-2 rounded mb-2"
                          onClick={handleAuthOptionClick}
                        >
                          Sign Up
                        </Link>
                        <a 
                          href="https://dafa365.in" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block text-center text-white px-4 py-2 rounded animate-pulse bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-all duration-500"
                          onClick={handleAuthOptionClick}
                        >
                          Download APK
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Desktop View */}
          <div className="hidden md:flex flex-wrap justify-between items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="DAFA Logo" className="h-8 w-auto" />
            </Link>

            <div className="text-center order-3 md:order-2 w-full md:w-auto my-2 md:my-0">
              <div className="text-sm">{formattedDate}</div>
              <div className="text-lg font-semibold">{formattedTime}</div>
            </div>

            <div className="flex items-center space-x-4 order-2 md:order-3">
              {currentUser ? (
                <>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                    <span className="font-medium">Balance:</span> ₹
                    <span className="font-bold">
                      {typeof balance === 'number' ? balance.toFixed(2) : '0.00'}
                    </span>
                  </div>
                  {currentUser.isAdmin ? (
                    <Link to="/admin" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                      Admin Panel
                    </Link>
                  ) : (
                    <Link to="/dashboard" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                      Dashboard
                    </Link>
                  )}
                  <button 
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                    Login
                  </Link>
                  <Link to="/register" className="bg-white hover:bg-gray-100 text-orange-500 border border-orange-500 px-4 py-2 rounded">
                    Sign Up
                  </Link>
                </>
              )}
              
              {/* Desktop download APK button - always visible regardless of login status */}
              <a 
                href="https://dafa365.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white px-4 py-2 rounded animate-pulse bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-all duration-500"
              >
                Download APK
              </a>
            </div>
          </div>
          
          {/* Mobile Date/Time View */}
          <div className="md:hidden text-center mt-2">
            <div className="text-sm">{formattedDate}</div>
            <div className="text-lg font-semibold">{formattedTime}</div>
          </div>
        </div>
        
        {/* Horizontal scrolling games section */}
        <div className="w-full overflow-x-auto bg-orange-800 py-2 px-4">
          <div className="flex space-x-4 min-w-max">
            <NavLink 
              to="/cricket" 
              className={({ isActive }) => 
                `px-4 py-2 rounded whitespace-nowrap transition-colors duration-200 
                ${isActive ? 'bg-orange-500' : 'hover:bg-orange-700'}`
              }
            >
              🏏 Cricket
            </NavLink>
            <NavLink 
              to="/football" 
              className={({ isActive }) => 
                `px-4 py-2 rounded whitespace-nowrap transition-colors duration-200 
                ${isActive ? 'bg-orange-500' : 'hover:bg-orange-700'}`
              }
            >
              ⚽ Football
            </NavLink>
            <NavLink 
              to="/casino" 
              className={({ isActive }) => 
                `px-4 py-2 rounded whitespace-nowrap transition-colors duration-200 
                ${isActive ? 'bg-orange-500' : 'hover:bg-orange-700'}`
              }
            >
              🎮 Casino
            </NavLink>
            
            {/* Individual casino games */}
            {casinoGames.map((game, index) => (
              <NavLink 
                key={index}
                to={`/casino/${game.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) => 
                  `px-4 py-2 rounded whitespace-nowrap transition-colors duration-200 
                  ${isActive ? 'bg-orange-500' : 'hover:bg-orange-700'}`
                }
              >
                {game.emoji} {game.name}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* This div creates space for content to appear below the header */}
      <div id={headerHeight} className="header-spacer"></div>
    </>
  );
};

export default Header;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {


//   const categories = [
//     {
//       name: "Casino",
//       description: "Try your luck with our wide range of casino games",
//       link: "/casino",
//       icon: "🎰"
//     },
//     {
//       name: "Cricket",
//       description: "Bet on your favorite cricket matches",
//       link: "/cricket",
//       icon: "🏏"
//     },
//     {
//       name: "Football",
//       description: "Explore football matches from around the world",
//       link: "/football",
//       icon: "⚽"
//     }
//   ];

//   return (
//     <div className="container mx-auto">
//       <div className="bg-orange-100 rounded-lg p-8 mb-0 flex justify-center items-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-orange-800 mb-4">Welcome to DAFA365</h1>
//           <p className="text-lg text-gray-700">
//             Your premier destination for sports betting and casino games.
//           </p>
//         </div>
//       </div>
//         <div className="relative w-full h-64 bg-cover bg-center mb-8" style={{ backgroundImage: "url('https://laser247.club/assets/img/slider1.webp')" }}>
//       </div>

//       <div className="container mx-auto flex space-x-4 mb-8">
//         <div className="relative w-1/2 h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://laser247.club/assets/img/banner-sport1.webp')" }}>
//         </div>
//         <div className="relative w-1/2 h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://laser247.club/assets/img/sportbook.webp')" }}>
//         </div>
//       </div>

//       <div className="container mx-auto flex space-x-4 mb-8">
//         <div className="relative w-1/2 h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://tezcdn.io/casino/casino-highlight/aviator-730-280.gif')" }}>
//         </div>
//         <div className="relative w-1/2 h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://laser247.club/assets/img/sportbook.webp')" }}>
//         </div>
//       </div>

//       <div className="container mx-auto flex space-x-4 mb-8">
//         <div className="relative w-1/2 h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://tezcdn.io/casino/casino-highlight/fungames-730_280.gif')" }}>
//         </div>
//         <div className="relative w-1/2 h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://tezcdn.io/casino/casino-highlight/wingogames-730-280.gif')" }}>
//         </div>
//       </div>


//       <h2 className="text-2xl font-bold text-orange-700 mb-6">Explore Categories</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         {/* {categories.map((category, index) => (
//           <Link 
//             key={index}
//             to={category.link}
//             className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
//           >
//             <div className="p-6">
//               <div className="text-4xl mb-4">{category.icon}</div>
//               <h3 className="text-xl font-bold text-orange-600">{category.name}</h3>
//               <p className="mt-2 text-gray-600">{category.description}</p>
//             </div>
//             <div className="bg-orange-500 text-white py-3 px-4 text-center">
//               Explore {category.name}
//             </div>
//           </Link>
//         ))} */}
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-bold text-orange-700 mb-4">Popular Games</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {["Teen Patti", "Andar Bahar", "Cricket 20-20", "Roulette"].map((game, index) => (
//             <div key={index} className="bg-orange-50 rounded p-4 text-center">
//               <div className="text-gray-800 font-medium">{game}</div>
//             </div>
//           ))}
//         </div>
//       </div>
     

//     <footer className="bg-[#7c2d12] text-white text-sm p-4 md:p-6">
//     <div className="container mx-auto">
//         {/* First Row - Logo & Description */}
//         <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
//           {/* Logo - 30% */}
//           <div className="w-full md:w-1/3 flex justify-center md:justify-start">
//             <img
//               src="https://www.dafa365.in/static/media/logo.02ed26cdd3ac1abc4ab8.png"
//               alt="DAF365 Logo"
//               className="h-14 w-auto"
//             />
//           </div>

//           {/* Description - 60% */}
//           <div className="w-full md:w-2/3 text-center md:text-left mt-4 md:mt-0">
//             <p className="font-bold text-lg">DAF365</p>
//             <p className="text-xs leading-relaxed">
//               DAF365 is a limited liability company incorporated under the laws of Curacao. Players are requested not to contact any untrusted sources for Lotus365 accounts, as this is an online site and they can only register independently without any agents. Only deposit through the account details generated by the system or provided by our official support team.
//             </p>
//           </div>
//         </div>

//         {/* Second Row - Contact & Best Browsers */}
//         <div className="flex flex-col  md:flex-row  items-center text-center  mt-6">
//           <div className="w-full md:w-1/3"></div> {/* Empty to maintain spacing */}
//           <div className="w-full md:w-2/3">
//             <p className="font-semibold">Our website works best in : Google Chrome, Firefox</p>
          
//             <p className="font-semibold text-xs">
//               Contact Us:{" "} <a href="mailto:INFO@DAFA365.IN" className="underline">
//                 INFO@DAFA365.IN
//               </a>
              
//             </p>
//           </div>
//         </div>

//         {/* Bottom Section - Links */}
//         <div className="border-t border-b border-gray-400 mt-6 pt-4 pb-4 text-center">
//           <div className="flex flex-wrap justify-center gap-6 text-xs">
//             <a href="#" className="hover:underline">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:underline">
//               Terms And Conditions
//             </a>
//             <a href="#" className="hover:underline">
//               Rules And Regulations
//             </a>
//             <a href="#" className="hover:underline">
//               About Us
//             </a>
//             <a href="#" className="hover:underline">
//               Responsible Gaming
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 text-center pt-4">
//       Copyrights © 2025 DAFA365. All rights reserved.
//       </div>
//     </footer>
    
//     <a
//       href="https://wa.me/12345678?text=Hello%20Dafa365,%20I%20am%20trying%20to%20contact%20you%20for%20more%20information."
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex items-center space-x-2 transition-all duration-300 hover:scale-110 animate-float"
//     >
//       <img
//         src="https://laser247.club/assets/img/wp_support.png"
//         alt="WhatsApp Support"
//         className="h-20 w-20 drop-shadow-lg animate-pulse"
//       />
//     </a>

    
  

//     </div>
//   );
// };

// export default HomePage;




// import { useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [formData, setFormData] = useState({
//     bankName: "",
//     accountNumber: "",
//     ifscCode: "",
//     accountHolder: "",
//     minAmount: "",
//     maxAmount: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/admin/bank", formData);
//       alert("Bank details updated successfully!");
//     } catch (error) {
//       console.error("Error updating bank details:", error);
//       alert("Failed to update bank details.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Admin Panel - Update Bank Details</h2>
//       <form className="space-y-3" onSubmit={handleSubmit}>
//         <input type="text" name="bankName" placeholder="Bank Name" className="w-full p-2 border rounded" onChange={handleChange} required />
//         <input type="text" name="accountNumber" placeholder="Account Number" className="w-full p-2 border rounded" onChange={handleChange} required />
//         <input type="text" name="ifscCode" placeholder="IFSC Code" className="w-full p-2 border rounded" onChange={handleChange} required />
//         <input type="text" name="accountHolder" placeholder="Account Holder" className="w-full p-2 border rounded" onChange={handleChange} required />
//         <input type="number" name="minAmount" placeholder="Min Amount" className="w-full p-2 border rounded" onChange={handleChange} required />
//         <input type="number" name="maxAmount" placeholder="Max Amount" className="w-full p-2 border rounded" onChange={handleChange} required />
//         <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default HomePage;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const BankDetails = () => {
//   const [bankDetails, setBankDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBankDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/bank");
//         setBankDetails(Array.isArray(response.data) ? response.data : [response.data]);
//       } catch (err) {
//         setError("Error fetching bank details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBankDetails();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Bank Account</h2>
//         {loading && <p className="text-center text-gray-600">Loading bank details...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}
//         {bankDetails.length > 0 ? (
//           bankDetails.map((bank, index) => (
//             <div key={index} className="p-4 border-b flex flex-col gap-2">
//               <div className="flex justify-between items-center">
//                 <p className="font-semibold">Bank Name:</p>
//                 <p>{bank.bankName}</p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="font-semibold">A/C No:</p>
//                 <p>{bank.accountNumber}</p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="font-semibold">IFSC Code:</p>
//                 <p>{bank.ifscCode}</p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="font-semibold">Account Holder:</p>
//                 <p>{bank.accountHolder}</p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="font-semibold">Min Amount:</p>
//                 <p>{bank.minAmount}</p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="font-semibold">Max Amount:</p>
//                 <p>{bank.maxAmount}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           !loading && <p className="text-center text-gray-600">No bank details found.</p>
//         )}
//         <div className="mt-4 flex flex-col items-center">
//           <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
//             Submit
//           </button>
//           <a
//             href="https://www.upitobank.info"
//             target="_blank"
//             className="mt-2 text-blue-600 underline"
//             rel="noopener noreferrer"
//           >
//             How to Transfer UPI to Bank
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankDetails;



