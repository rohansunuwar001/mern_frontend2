import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home";
import AdminDashboard from "../Admin/AdminDashboard";
import AdminRegister from "../Admin/AdminRegister";
import AdminLogin from "../Admin/AdminLogin";
import AdminMyProfile from "../Admin/AdminMyProfile";
import AdminLogout from "../Admin/AdminLogout";
import AdminUpdateProfile from "../Admin/AdminUpdateProfile";
import AdminUpdatePassword from "../Admin/AdminUpdatePassword";
import AdminForgetPassword from "../Admin/AdminForgetPassword";
import AdminReadAll from "../Admin/AdminReadAll";
import AdminVerify from "../Admin/AdminVerify";
import AdminResetPassword from "../Admin/AdminResetPassword";
import ReadAllStudent from "../student/ReadAllStudent";
import CreateStudent from "../student/CreateStudent";
import ReadSpecificStudent from "../student/ReadSpecificStudent";
import UpdateStudent from "../student/UpdateStudent";
import AdminUpdateUser from "../Admin/AdminUpdateUser";
import AdminReadSpecificUser from "../Admin/AdminReadSpecificUSer";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="admin" element={<Outlet />}>
            <Route index element={<AdminDashboard />}></Route>
            <Route path="register" element={<AdminRegister />}></Route>

            <Route path="login" element={<AdminLogin />}></Route>

            <Route path="my-profile" element={<AdminMyProfile />}></Route>

            <Route path="logout" element={<AdminLogout />}></Route>

            <Route
              path="update-profile"
              element={<AdminUpdateProfile />}
            ></Route>

            <Route
              path="update-password"
              element={<AdminUpdatePassword />}
            ></Route>
            <Route
              path="forgot-password"
              element={<AdminForgetPassword />}
            ></Route>
            <Route path="read-all" element={<AdminReadAll />}></Route>
            <Route path="update" element={<Outlet />}>
              <Route path=":id" element={<AdminUpdateUser />}></Route>
            </Route>

            <Route path=":id" element={<AdminReadSpecificUser />}></Route>
          </Route>

          <Route path="verify-email" element={<AdminVerify />}></Route>

          <Route path="reset-password" element={<AdminResetPassword />}></Route>

          <Route path="student" element={<Outlet />}>
            <Route index element={<ReadAllStudent />}></Route>
            <Route path="create" element={<CreateStudent />}></Route>

            <Route path=":id" element={<ReadSpecificStudent />}></Route>

            <Route path="update/:id" element={<UpdateStudent />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
