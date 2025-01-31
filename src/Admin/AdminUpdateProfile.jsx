import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminUpdateProfile = () => {
  let [fullName, setFullName] = useState("");
  let [gender, setGender] = useState("");

  let navigate = useNavigate();

  let token = localStorage.getItem("token");

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/my-profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log(result);
      let data = result.data.data;
      setFullName(data.fullname);
      setGender(data.gender);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];

  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName: fullName,
      gender: gender,
    };

    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/update-profile`,
        method: `PATCH`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      data = result.data.data;
      setFullName(data.fullName);
      setGender(data.gender);
      navigate(`/admin/my-profile`);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="fullName">
            FullName :
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </label>
        </div>
        <br />
        <div>
          <label>Gender : </label>
          {genders.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  name="gender"
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </span>
            );
          })}
        </div>
        <br />
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateProfile;
