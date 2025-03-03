// import { useEffect, useState } from "react";
// import axios from "axios";

// const YourComponent = () => {
//   const [bankDetails, setBankDetails] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     bankName: "",
//     accountNumber: "",
//     ifscCode: "",
//     accountHolder: "",
//     minAmount: "",
//     maxAmount: "",
//   });


//   const fetchBankDetails = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5000/api/bank");
//       console.log("Fetched Data:", response.data); // ✅ Debugging: Log API response
  
//       const data = Array.isArray(response.data) ? response.data : [response.data];
//       setBankDetails(data);
//     } catch (err) {
//       setError("Error fetching bank details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Call fetchBankDetails inside useEffect
//   useEffect(() => {
//     fetchBankDetails();
//   }, []);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
  
//     console.log("Updating Bank ID:", formData.id); // ✅ Debugging: Log ID before updating
  
//     if (!formData.id) {
//       alert("Error: Bank ID is missing!");
//       return;
//     }
  
//     try {
//       await axios.put(`http://localhost:5000/api/admin/bank/${formData.id}`, formData);
//       alert("Bank details updated successfully!");
//       setEditMode(false);
//       fetchBankDetails();
//     } catch (err) {
//       console.error("Update Error:", err);
//       setError("Error updating bank details.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Bank Details</h2>

//         {loading && <p className="text-center text-gray-600">Loading bank details...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}

//         {bankDetails.length > 0 ? (
//           bankDetails.map((bank, index) => (
//             <div key={index} className="p-4 border-b">
//               <p><strong>Bank Name:</strong> {bank.bankName}</p>
//               <p><strong>Account Number:</strong> {bank.accountNumber}</p>
//               <p><strong>IFSC Code:</strong> {bank.ifscCode}</p>
//               <p><strong>Account Holder:</strong> {bank.accountHolder}</p>
//               <p><strong>Min Amount:</strong> {bank.minAmount}</p>
//               <p><strong>Max Amount:</strong> {bank.maxAmount}</p>
//               <button
//   onClick={() => {
//     console.log("Selected Bank:", bank); // ✅ Debugging: Log bank object
//     setEditMode(true);
//     setFormData({
//       id: bank._id, // ✅ Make sure we store `_id`
//       bankName: bank.bankName,
//       accountNumber: bank.accountNumber,
//       ifscCode: bank.ifscCode,
//       accountHolder: bank.accountHolder,
//       minAmount: bank.minAmount,
//       maxAmount: bank.maxAmount,
//     });
//   }}
//   className="mt-4 bg-blue-500 text-white p-2 rounded"
// >
//   Edit
// </button>
//             </div>
//           ))
//         ) : (
//           !loading && <p className="text-center text-gray-600">No bank details found.</p>
//         )}

//         {editMode && (
//           <form onSubmit={handleUpdate} className="mt-6 space-y-4">
//             <input type="text" name="bankName" value={formData.bankName} onChange={handleInputChange} placeholder="Bank Name" className="w-full p-2 border rounded" required />
//             <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="Account Number" className="w-full p-2 border rounded" required />
//             <input type="text" name="ifscCode" value={formData.ifscCode} onChange={handleInputChange} placeholder="IFSC Code" className="w-full p-2 border rounded" required />
//             <input type="text" name="accountHolder" value={formData.accountHolder} onChange={handleInputChange} placeholder="Account Holder" className="w-full p-2 border rounded" required />
//             <input type="number" name="minAmount" value={formData.minAmount} onChange={handleInputChange} placeholder="Min Amount" className="w-full p-2 border rounded" required />
//             <input type="number" name="maxAmount" value={formData.maxAmount} onChange={handleInputChange} placeholder="Max Amount" className="w-full p-2 border rounded" required />
//             <button type="submit" className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600">Update Bank Details</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YourComponent;








import React, { useState } from "react";
import { Home, Wallet, MessageCircle, BookOpen, PlayCircle, Bell, Globe2, Phone,  PhoneCall, List, ChartArea, MessageCircleCode, LucideGamepad, GalleryThumbnails, LayoutTemplate } from "lucide-react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const HomeScreen = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Header */}
      <Header/>


{/* Add padding to avoid overlap with fixed header */}
<div className=" pt-16  "></div>

<div className=" fixed top-16 z-40  pt-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 left-0 w-full ">
<div className="p-4 mx-4 my-3   bg-gradient-to-b from-[#F6E5C6] to-[#FAF7F1] rounded-xl shadow-md  ">
      
      {/* Header Buttons */}
      <div className="flex  space-x-3 mb-2">
        <button className="  bg-[#E2952E] text-white px-11 py-2 rounded-full text-base  w-1/2  font-semibold">
          Demo Starline
        </button>
        <button className="bg-[#1E2232] text-white px-11 py-2 rounded-full  w-1/2 text-base font-semibold">
          Demo Jackpot
        </button>
      </div>

      {/* Contact Details Section */}
      <div className="flex space-x-3">
        
        {/* WhatsApp Section */}
        <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-md w-1/2">
  {/* WhatsApp Button */}
  <div className="bg-green-500 rounded-full p-2 flex items-center justify-center mr-2">
    <Phone className="text-white" size={20} />
  </div>
  <span className="text-black  font-semibold text-sm">Whatsapp</span>
</div>
        {/* Phone Section */}
        <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-md w-1/2">
        <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center mr-2">
        <Phone className="  text-white " size={20} />
  </div>
  <span className="text-black font-semibold text-sm">+91 1234567890</span>
        </div>

      </div>
    </div>
    </div>

{/* Add padding to avoid overlap with fixed header */}
<div className=" pt-44  "></div>

      {/* Game List */}
      <div className="flex-1 p-4 space-y-4">
        {["Surya Morning", "Balaji Morning", "Sridevi", "Time Bazar" , "Millan Morning", "Surya Morning", "Balaji Morning", "Sridevi", "Time Bazar" , "Millan Morning"].map((game, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md   items-center">
            <div className="justify-between flex  pb-2 ">
            <div>
              <span>
            <h2 className="text-lg font-bold bg-gradient-to-r from-[#ff4343] to-[#ffda9a] bg-clip-text text-transparent">
  {game}
</h2>
<h2 className="text-lg font-bold bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent">
  123-74-822
</h2></span>
              <p className="text-sm bold text-green-500">Running for close</p>
              
            </div>
            
            <button className="bg-gradient-to-r  from-[#ffba43] via-[#ffea00] to-[#ffba43] mt-2 rounded-full text-white shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out flex items-center justify-center w-12 h-12">
  <PlayCircle size={30} className="drop-shadow-md" />
</button>

            </div>
            <div className="justify-between flex border-t pt-2 border-gray-300 ">
            <p className="text-xs flex items-center text-gray-400">Open Bids: <span className="text-black pl-1">09:00 AM</span></p>
            <p className="text-xs flex items-center text-gray-400">closed Bids: <span className="text-black pl-1">11:00 AM</span></p>
            </div>
          </div>
        ))}
      </div>

{/* Add padding to avoid overlap with fixed header */}
<div className=" pt-20 "></div>

      {/* Bottom Navbar */}
      <NavbarBottom/>

    </div>
  );
};
export default HomeScreen;



// import { useEffect, useState } from "react";
// import axios from "axios";


// const Homepage = () => {
//   const [bank, setBank] = useState(null);

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


//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/api/bank");
//             if (response.data) setBank(response.data); // Extracting data correctly
//         } catch (error) {
//             console.error("Error loading bank details:", error);
//         }
//     };
//     fetchData();
// }, []);

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
//       <div>
//             {bank ? (
//                 <div>
//                     <h2>Bank Details</h2>
//                     <p><strong>Bank Name:</strong> {bank.bankName}</p>
//                     <p><strong>Account Number:</strong> {bank.accountNumber}</p>
//                     <p><strong>IFSC Code:</strong> {bank.ifscCode}</p>
//                     <p><strong>Account Holder:</strong> {bank.accountHolder}</p>
//                     <p><strong>Min Amount:</strong> {bank.minAmount}</p>
//                     <p><strong>Max Amount:</strong> {bank.maxAmount}</p>
//                 </div>
//             ) : (
//                 <p>Loading bank details...</p>
//             )}
//         </div>
//     </div>
//   );
// };

// export default Homepage;


