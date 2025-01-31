import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [location, setLocation] = useState("");

  let params = useParams();

  let navigate = useNavigate();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3001/student/${params.id}`,
        method: "GET",
      });
      setName(result.data.result.name);
      setAge(result.data.result.age);
      setLocation(result.data.result.location);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      age: age,
      location: location,
    };

    try {
      let result = await axios({
        url: `http://localhost:3001/student/${params.id}`,
        method: "PATCH",
        data: data,
      });
      navigate(`/student/${params.id}`);
    } catch (error) {}
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="location">Location :</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
