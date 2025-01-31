import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminUpdatePassword = () => {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");

  let navigate = useNavigate();

  let token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/update-password`,
        method: "PATCH",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      navigate(`/admin/login`);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="oldPassword">OldPassword : </label>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="newPassword">NewPassword : </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminUpdatePassword;
