import { Link } from "react-router-dom";
import { ArrowLeft, Wallet, Landmark, History, Download, Upload } from "lucide-react";

const AddFunds = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <Link to="/" className="p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-lg font-semibold">FUNDS</h1>
        <div className="flex items-center space-x-2 bg-gray-900 text-white px-3 py-1 rounded-full">
          <Wallet size={18} />
          <span className="text-sm font-medium">₹99.0</span>
        </div>
      </div>

      {/* Funds Options */}
      <div className="p-4 space-y-4">
        <FundsOption icon={<Wallet size={24} />} text="Add Fund" link="/add-fund" />
        <FundsOption icon={<Upload size={24} />} text="Withdraw Funds" link="/withdraw-funds" />
        <FundsOption icon={<Landmark size={24} />} text="Bank Details" link="/bank-details" />
        <FundsOption icon={<History size={24} />} text="Deposit History" link="/deposit-history" />
        <FundsOption icon={<Download size={24} />} text="Withdraw History" link="/withdraw-history" />
      </div>
    </div>
  );
};

// Reusable Funds Option Component
const FundsOption = ({ icon, text, link }) => {
  return (
    <Link to={link} className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <div className="p-3 bg-orange-500 text-white rounded-full">{icon}</div>
      <span className="text-base font-medium">{text}</span>
    </Link>
  );
};

export default AddFunds;
