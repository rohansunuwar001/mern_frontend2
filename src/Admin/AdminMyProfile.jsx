import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminMyProfile = () => {
  let [profile, setProfile] = useState("");

  let navigate = useNavigate();

  let token = localStorage.getItem("token");

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/my-profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });
     setProfile(result.data.data);
     //console.log(result)
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>FullName is : {profile.fullname} </div>
      <div>Email is : {profile.email} </div>
      <div>Gender is : {profile.gender} </div>
      <div>Role is : {profile.role} </div>
      <br />
      <div>
        <button
          onClick={() => {
            navigate("/admin/update-profile");
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default AdminMyProfile;
