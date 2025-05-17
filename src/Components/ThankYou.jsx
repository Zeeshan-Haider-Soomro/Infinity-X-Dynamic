// ThankYou.jsx
import { useNavigate } from "react-router";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EEDFFF] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-[#320142] mb-4">Thank You!</h1>
      <p className="text-lg text-[#9C448D] mb-6">We'll contact you soon.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#FB64B6] hover:bg-[#9C448D] cursor-pointer text-white font-semibold px-6 py-3 rounded transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
