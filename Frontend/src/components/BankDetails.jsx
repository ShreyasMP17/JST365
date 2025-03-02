import { useState } from "react";
import { ArrowLeft, Wallet } from "lucide-react";

const BankDetails = () => {
  const [form, setForm] = useState({
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    branchName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-6">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ArrowLeft className="text-gray-700 cursor-pointer" size={24} />
          <h2 className="ml-2 text-lg font-semibold text-gray-800">BANK DETAILS</h2>
        </div>
        <div className="flex items-center bg-black text-white px-3 py-1 rounded-full">
          <Wallet size={18} className="mr-1" />
          <span className="text-sm font-semibold">₹99.0</span>
        </div>
      </div>

      {/* Bank Form */}
      <div className="w-full max-w-md">
        {[
          { label: "Account Holder Name", name: "accountHolder", placeholder: "Account Holder Name" },
          { label: "Account Number", name: "accountNumber", placeholder: "Enter Account Number" },
          { label: "IFSC Code", name: "ifsc", placeholder: "IFSC Code" },
          { label: "Bank Name", name: "bankName", placeholder: "Enter Bank Name" },
          { label: "Branch Name", name: "branchName", placeholder: "Enter Branch Name" },
        ].map((field) => (
          <div key={field.name} className="mb-4">
            <label className="text-gray-700 font-medium text-sm">{field.label}</label>
            <input
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        ))}
      </div>

      {/* Add Bank Button */}
      <button className="mt-6 w-full max-w-md bg-orange-500 text-white text-lg font-semibold py-3 rounded-lg shadow-md">
        Add Bank
      </button>
    </div>
  );
};

export default BankDetails;
