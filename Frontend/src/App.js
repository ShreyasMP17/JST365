import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Sidebar from './components/Sidebar';
import MyBids from "./components/MyBids"
import "./index.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Passbook from './components/PassBook';
import ChatSupport from './components/ChatSupport';
import ChartList from './components/Chart';
import ChangeMPIN from './components/ChangeMpin';
import Settings from './components/Settings';
import HowToPlay from './components/HowToPlay';
import GameRates from './components/GameRates';
import NoticeBoard from './components/NoticeBoard';
import SubmitIdeas from './components/SubmitIdeas';
import NavbarBottom from './components/NavbarBottom';
import AddFunds from './components/AddFunds';
import LoginPage from './components/LoginPage';
import OTPVerification from './components/OtpVerification';
import MPINRegistration from './components/MPINregister';
import AddFund from './components/AddFund';
import PopWithdrawFunds from './components/PopupTerms';
import WithdrawFunds from './components/WithdrawFunds';
import BankDetails from './components/BankDetails';
import DepositHistory from './components/DepositHistory';
import BidHistory from './components/BidHistory';
import NotFound from './components/404NotFound';
import WithdrawHistory from './components/WithdrawHistory';
import GameResultHistory from './components/GameResultHistory';
import StarlineResultHistory from './components/StarlineResultHistory';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/my-bids" element={<MyBids />} />
        <Route path="/pass-book" element={<Passbook />} />
        <Route path="/chat-support" element={<ChatSupport />} />
        <Route path="/chart" element={<ChartList />} />
        <Route path="/change-mpin" element={<ChangeMPIN />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/game-rates" element={<GameRates />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/submit-ideas" element={<SubmitIdeas />} />
        <Route path="/add-funds" element={<AddFunds />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/mpin-register" element={<MPINRegistration />} />
        <Route path="/add-fund" element={<AddFund />} />
        <Route path="/withdraw-funds" element={<WithdrawFunds />} />
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/deposit-history" element={<DepositHistory />} />
        <Route path="/withdraw-history" element={<WithdrawHistory />} />
        <Route path="/bid-history" element={<BidHistory />} />
        <Route path="/game-result-history" element={<GameResultHistory />} />
        <Route path="/starline-result-history" element={<StarlineResultHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
