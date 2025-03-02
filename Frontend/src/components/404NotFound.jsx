import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-orange-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      
      <Link to="/" className="mt-6 px-6 py-2 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-orange-600 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
