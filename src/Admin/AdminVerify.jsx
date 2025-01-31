import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdminVerify = () => {
  let [query] = useSearchParams();

  let navigate = useNavigate();

  let token = query.get("token");

  let verifyEmail = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/verify-email`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate(`/admin/login`);
    } catch (error) {}
  };

  useEffect(() => {
    verifyEmail();
  }, []);

  return <div>AdminVerify</div>;
};

export default AdminVerify;
