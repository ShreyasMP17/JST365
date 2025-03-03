import { Link } from "react-router-dom";
import { ArrowLeft, Wallet, Landmark, History, Download, Upload } from "lucide-react";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const AddFunds = () => {
  return (
    <div className="">
      <Header/>
    <div className="min-h-screen  py-24 ">
      {/* Header */}
      <div className=" p-4 ">
       
        <h1 className=" text-2xl text-center font-bold">FUNDS</h1>
        
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
    <NavbarBottom/>
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
