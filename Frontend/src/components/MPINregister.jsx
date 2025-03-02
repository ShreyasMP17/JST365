import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const MPINRegistration = () => {
  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [showMpin, setShowMpin] = useState(false);
  const [showConfirmMpin, setShowConfirmMpin] = useState(false);

  const handleRegister = () => {
    if (mpin.length !== 4 || confirmMpin.length !== 4) {
      alert("MPIN must be 4 digits.");
      return;
    }
    if (mpin !== confirmMpin) {
      alert("MPINs do not match.");
      return;
    }
    alert("MPIN Registered Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-6 py-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-center">MPIN Registration</h1>
        <p className="text-center text-gray-600">
          Please provide a 4-digit numeric MPIN to protect your account against unauthorized access.
        </p>
      </div>

      {/* MPIN Input */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-semibold">MPIN</label>
          <div className="flex items-center bg-white border rounded-lg px-3 py-2 shadow-md">
            <Lock size={20} className="text-gray-500" />
            <input
              type={showMpin ? "text" : "password"}
              maxLength="4"
              value={mpin}
              onChange={(e) => setMpin(e.target.value)}
              className="flex-1 ml-2 outline-none text-lg"
              placeholder="MPIN"
            />
            <button onClick={() => setShowMpin(!showMpin)}>
              {showMpin ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm MPIN Input */}
        <div>
          <label className="text-sm font-semibold">Confirm MPIN</label>
          <div className="flex items-center bg-white border rounded-lg px-3 py-2 shadow-md">
            <Lock size={20} className="text-gray-500" />
            <input
              type={showConfirmMpin ? "text" : "password"}
              maxLength="4"
              value={confirmMpin}
              onChange={(e) => setConfirmMpin(e.target.value)}
              className="flex-1 ml-2 outline-none text-lg"
              placeholder="Confirm MPIN"
            />
            <button onClick={() => setShowConfirmMpin(!showConfirmMpin)}>
              {showConfirmMpin ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <button
        onClick={handleRegister}
        className="bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md"
      >
        Register
      </button>
    </div>
  );
};

export default MPINRegistration;
