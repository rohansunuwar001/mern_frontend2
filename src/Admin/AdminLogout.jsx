import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  let navigate = useNavigate();
  localStorage.removeItem("token");

  useEffect(() => {
    navigate("/");
  }, []);
  return <div>AdminLogout</div>;
};

export default AdminLogout;
