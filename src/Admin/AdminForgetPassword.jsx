import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminForgetPassword = () => {
  let [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: email,
    };

    try {
      let result = await axios({
        url: `http://localhost:3001/webUser/forget-password`,
        method: "POST",
        data: data,
      });
     // console.log(result)
      toast.success(result.data.message);
      setEmail("");
    } catch (error) {}
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminForgetPassword;
