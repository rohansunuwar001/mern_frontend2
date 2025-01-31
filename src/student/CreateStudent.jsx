import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateStudent = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      age: age,
      location: location,
    };

    try {
      let result = await axios({
        url: `http://localhost:3001/student`,
        method: "POST",
        data: data,
      });
      toast.success(result.data.message);
      setName("");
      setAge("");
      setLocation("");
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudent;
