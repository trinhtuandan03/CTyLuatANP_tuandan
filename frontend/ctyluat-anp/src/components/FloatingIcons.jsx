import { FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Zalo from "../img/Zalo.png";

const FloatingIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Góc trái */}
      <div className="fixed left-4 bottom-20 flex flex-col gap-3 z-50">
        {/* Zalo (Lắc) */}
        <motion.a
          href="https://zalo.me/0909 229 689"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 flex items-center justify-center transition"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <img src={Zalo} alt="Zalo" className="w-12 h-12" />
          {/* Hiệu ứng vòng tròn */}
          <span className="absolute w-full h-full bg-blue-300 rounded-full opacity-50 animate-ping"></span>
        </motion.a>

        {/* Phone (Chỉ icon lắc, text đứng yên) */}
        <a
          href="tel:0909 229 689"
          className="relative flex items-center gap-2 bg-white p-2 rounded-full shadow-lg border border-green-500"
        >
          <motion.div
            className="relative bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
            animate={{ rotate: [0, 20, -20, 0] }} // Chỉ icon lắc
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaPhoneAlt size={20} />
            {/* Hiệu ứng vòng tròn lan tỏa */}
            <span className="absolute w-full h-full bg-green-300 rounded-full opacity-50 animate-ping"></span>
          </motion.div>
          <span className="text-red-500 font-bold">Gọi: 0909 229 689</span>
        </a>
      </div>

      {/* Nút lên đầu trang */}
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-10 w-12 h-12 bg-blue-500 flex items-center justify-center shadow-lg hover:bg-blue-600 transition z-50"
      >
        <FaArrowUp size={24} color="white" />
      </button>
    </>
  );
};

export default FloatingIcons;
