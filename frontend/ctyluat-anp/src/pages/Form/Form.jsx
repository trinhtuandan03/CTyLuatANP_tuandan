import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../img/detail_banner.png";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const Form = () => {
  const [forms, setForms] = useState([]);

  // Gọi API lấy danh sách biểu mẫu
  useEffect(() => {
    axios
      .get(`${API_URL}/forms`)
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.error("Lỗi lấy danh sách biểu mẫu:", error);
      });
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Header />

      {/* Banner */}
      <div className="relative w-full h-[220px] mt-20">
        <img src={Banner} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center h-full w-[70%] mx-auto">
          <h2 className="text-4xl font-semibold text-white">Biểu mẫu</h2>
        </div>
      </div>

      {/* Danh sách biểu mẫu */}
      <div className="container mx-auto px-4 py-10 w-[70%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {forms.length > 0 ? (
            forms.map((form, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={form.image}
                  alt={form.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {form.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-1">
                    {form.description}
                  </p>
                  <Link
                    to={`/danhmuc/bieu-mau/${form.slug}`}
                    className="mt-3 inline-block text-white bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-orange-500 transition duration-700"
                  >
                    Xem Tiếp →
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500">Không có biểu mẫu nào!</p>
          )}
        </motion.div>
      </div>

      <Footer />
      {/*Coopy right */}
      <div className="bg-blue-950 w-full">
        <div className="container mx-auto text-white w-[70%] border-t border-white pt-4 flex justify-between text-lg py-4">
          <span>Copyright © 2021 congtyluatanp.com . All rights reserved.</span>
          <span>Design by DUDI SoftWare</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
