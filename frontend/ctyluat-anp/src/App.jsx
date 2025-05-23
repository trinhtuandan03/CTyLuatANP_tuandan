import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
// Import các trang user
import Home from "./pages/Home/Home";
import Company from "./pages/Introduce/Company";
import FloatingIcons from "./components/FloatingIcons";
import Members from "./pages/Introduce/Members";
import Form from "./pages/Form/Form";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import FormDetail from "./pages/Form/FormDetail";
import NewsDetail from "./pages/News/NewsDetail";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/Services/ServicesDetail";
import LegalConsultPopup from "./popup/LegalConsultPopup";
// Import các trang admin
import NewsManagementPost from "./pages/Admin/ManagementPost/NewsManagementPost";
import CreatePost from "./pages/Admin/ManagementPost/CreatePost";
import DetailPost from "./pages/Admin/ManagementPost/DetailPost";
import EditPost from "./pages/Admin/ManagementPost/EditPost";
import NewsDetailManagement from "./pages/Admin/ManagementNews/NewsDetailManagement";
import EditNews from "./pages/Admin/ManagementNews/EditNews";
import CreateNews from "./pages/Admin/ManagementNews/CreateNews";
import CreateForm from "./pages/Admin/Forms/CreateForm";
import FormManagement from "./pages/Admin/Forms/FormManagement";
import NewsManagement from "./pages/Admin/ManagementNews/NewsManagement";
import ServicesManagement from "./pages/Admin/ManagementServices/ServicesManagement";
import FormDetailManagement from "./pages/Admin/Forms/FormDetailManagement";
import EditForm from "./pages/Admin/Forms/EditForm";
import EditProfile from "./pages/Admin/ProfileAdmin/EditProfile";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import LoginAdmin from "./pages/Admin/LoginAdmin";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/admin/login" />;
};

const AppContent = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const isAdminRoute = location.pathname.startsWith("/admin"); // Kiểm tra nếu đang ở trang admin

  return (
    <>
      {/* Hiển thị popup khi load trang nếu không phải trang admin */}
      {!isAdminRoute && <LegalConsultPopup />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/danhmuc/ve-chung-toi" exact element={<Company />} />
        <Route path="/danhmuc/doi-ngu-luat-su" exact element={<Members />} />
        <Route path="/danhmuc/bieu-mau" exact element={<Form />} />
        <Route path="/danhmuc/bieu-mau/:slug" element={<FormDetail />} />
        <Route path="/danhmuc/tin-tuc" exact element={<News />} />
        <Route path="/danhmuc/tin-tuc/:slug" exact element={<NewsDetail />} />
        <Route path="/danhmuc/lien-he" exact element={<Contact />} />
        <Route path="/danh-muc/:categorySlug/:serviceSlug" element={<Services />} />
        <Route path="/:postSlug" element={<ServiceDetail />} />
        {/* Admin Routes */}
        <Route path="/admin/login" exact element={<LoginAdmin />} />
        <Route
          path="/admin"
          element={<PrivateRoute exact element={<HomeAdmin />} />}
        />
        <Route
          path="/admin/chinh-sua-thong-tin"
          element={<PrivateRoute exact element={<EditProfile />} />}
        />
        {/* Quản lý biểu mẫu  */}
        <Route
          path="/admin/quan-ly-bieu-mau"
          element={<PrivateRoute exact element={<FormManagement />} />}
        />
        <Route
          path="/admin/quan-ly-bieu-mau/:slug"
          element={<FormDetailManagement />}
        />
        <Route
          path="/admin/quan-ly-bieu-mau/sua/:slug"
          element={<EditForm />}
        />
        <Route
          path="/admin/tao-bieu-mau"
          element={<PrivateRoute exact element={<CreateForm />} />}
        />
        {/* Quản lý tin tức  */}
        <Route
          path="/admin/quan-ly-tin-tuc"
          element={<PrivateRoute exact element={<NewsManagement />} />}
        />
        <Route
          path="/admin/quan-ly-tin-tuc/:slug"
          element={<PrivateRoute exact element={<NewsDetailManagement />} />}
        />
        <Route
          path="/admin/quan-ly-tin-tuc/sua/:slug"
          element={<PrivateRoute exact element={<EditNews />} />}
        />
        <Route
          path="/admin/tao-tin-tuc"
          element={<PrivateRoute exact element={<CreateNews />} />}
        />
        {/* Quản lý dịch vụ  */}
        <Route
          path="/admin/quan-ly-dich-vu-hoi-dap"
          element={<PrivateRoute exact element={<ServicesManagement />} />}
        />
        {/* Quản lý Bài Viết  */}
        <Route
          path="/admin/quan-ly-bai-viet"
          element={<PrivateRoute exact element={<NewsManagementPost />} />}
        />
        <Route
          // chi tiết bài viết
          path="/admin/quan-ly-bai-viet/:slug"
          element={<PrivateRoute exact element={<DetailPost />} />}
        />
        <Route
          // chỉnh sửa bài viết
          path="/admin/quan-ly-bai-viet/sua/:slug"
          element={<PrivateRoute exact element={<EditPost />} />}
        />
        <Route
          // tạo bài viết
          path="/admin/tao-bai-viet"
          element={<PrivateRoute exact element={<CreatePost />} />}
        />
      </Routes>

      {/* Chỉ hiển thị FloatingIcons nếu KHÔNG phải trang admin */}
      {!isAdminRoute && <FloatingIcons />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
