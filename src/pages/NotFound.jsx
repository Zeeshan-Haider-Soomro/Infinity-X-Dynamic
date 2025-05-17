import { FaSadTear } from 'react-icons/fa';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#320142] text-white px-6 text-center">
      <FaSadTear className="text-[100px] text-white mb-6 animate-bounce" />

      <h1 className="text-5xl font-bold mb-4 text-white">404 - Page Not Found</h1>
      <p className="text-lg mb-8 text-white">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-[#9C448D] hover:bg-[#7a346f] transition px-6 py-3 text-white font-semibold rounded-full"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
