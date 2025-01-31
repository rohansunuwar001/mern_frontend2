import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminUpdateUser = () => {
    let params = useParams();
  let [fullname, setFullName] = useState("");
  let [gender, setGender] = useState("");
  let [role, setRole] = useState("");

  let token = localStorage.getItem("token");


  let navigate = useNavigate();

  let genders = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/${params.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = result.data.data;
      setFullName(data.fullname);
      setGender(data.gender);
      setRole(data.role);
    } catch (error) {}
  };

 let handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      fullname: fullname,
      gender: gender,
      role: role,
    };

    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/${params.id}`,
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data,
      });
     // console.log(result);
      navigate(`/admin/${params.id}`)
    } catch (error) {}
};

  useEffect(() => {
    getData();
  },[]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="fullname">
            FullName :
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
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
          <label htmlFor="role"> Role : </label>
          <input
            type="text"
            name="role"
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateUser;
