import { useState } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Allow only one digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOTP = () => {
    alert(`Verifying OTP: ${otp.join("")}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-6 py-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-center">OTP Verification</h1>
        <p className="text-center text-gray-600">
          Verification code has been sent to your mobile number. Enter to continue...
        </p>
      </div>

      {/* OTP Input Fields */}
      <div className="flex justify-center space-x-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:border-orange-500 outline-none"
          />
        ))}
      </div>

      {/* Resend OTP */}
      <p className="text-center text-gray-600 mt-3">
        Didn’t receive the code? <span className="text-orange-500 font-semibold cursor-pointer">Resend OTP</span>
      </p>

      {/* Verify OTP Button */}
      <button
        onClick={handleVerifyOTP}
        className="bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTPVerification;
