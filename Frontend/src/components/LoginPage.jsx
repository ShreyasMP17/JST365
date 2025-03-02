import { useState } from "react";
import { Phone } from "lucide-react";

const LoginPage = () => {
  const [phone, setPhone] = useState("");

  const handleGetOTP = () => {
    alert(`OTP sent to ${phone}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-6 py-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-center">
          Welcome To <span className="text-orange-500">JST 567</span>
        </h1>
        <p className="text-center text-gray-600">India's best Satta Matka Application Welcomes you !!!</p>
      </div>

      {/* Phone Input Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <label className="block font-semibold text-gray-700 mb-2">Phone Number</label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <Phone className="text-orange-500" size={20} />
          <span className="ml-2 text-gray-700">+91</span>
          <input
            type="tel"
            placeholder="Enter 10 Digit Phone Number"
            className="w-full ml-3 outline-none bg-transparent text-gray-700"
            value={phone}
            maxLength="10"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      {/* Get OTP Button */}
      <button
        onClick={handleGetOTP}
        className="bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md"
      >
        Get OTP
      </button>

      {/* Footer */}
      <p className="text-sm text-center text-gray-600">
        ✅ Trusted by <span className="font-bold">1 Lakh Users</span>
      </p>
    </div>
  );
};

export default LoginPage;
