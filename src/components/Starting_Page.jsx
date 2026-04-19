import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Starting_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleClose = () => navigate("/");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="relative inline-block">
        <button
          onClick={handleClose}
          className="cursor-pointer absolute -top-3 -right-3 w-7 h-7 rounded-full bg-red-600 text-white text-sm z-10"
        >
          X
        </button>
        <img
          src="favicon/loadingicon.webp"
          alt="loading"
          className="h-[500px] w-auto max-w-[90vw] rounded-md sm:h-[500px]"
        />
      </div>
    </div>
  );
};

export default Starting_Page;
