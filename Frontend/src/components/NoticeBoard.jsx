import { FaWhatsapp } from "react-icons/fa";

const NoticeBoard = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4">
      <header className="flex items-center space-x-2 pb-4 border-b">
        <button className="text-gray-700 text-xl">&#8592;</button>
        <h2 className="text-lg font-semibold">NOTICE BOARD</h2>
      </header>
      
      <p className="text-sm text-gray-500 mt-2">
        Withdraw Information, Unfair - Bets, Cheating - Bets
      </p>

      <div className="flex items-center bg-green-100 text-green-700 p-2 rounded-md mt-4">
        <FaWhatsapp className="text-xl" />
        <span className="ml-2 font-semibold">+91 0123456789</span>
      </div>
      
      <section className="mt-4">
        <h3 className="text-md font-semibold">Withdraw Information</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>If users enter wrong bank details, Mama567 is not responsible.</li>
          <li>Before requesting withdrawal, re-check your bank details.</li>
          <li>After withdrawal request, if there is no valid wallet balance, the request will be auto-declined.</li>
        </ul>
      </section>
      
      <section className="mt-4">
        <h3 className="text-md font-semibold">Unfair - Bets</h3>
        <p className="text-sm text-gray-700 mt-2">
          If admin finds any unfair bets, blocking of digits, canning, or match-fix bets, admin has all rights to take necessary actions to block the user.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="text-md font-semibold">Cheating - Bets</h3>
        <p className="text-sm text-gray-700 mt-2">
          If admin finds any cheating, hacking, or phishing, admin has all rights to take necessary actions to block the user.
        </p>
      </section>
    </div>
  );
};

export default NoticeBoard;
