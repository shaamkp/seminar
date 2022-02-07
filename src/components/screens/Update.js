import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate ,useLocation} from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setName(localStorage.getItem("FNAME"));
    setBody(localStorage.getItem("LNAME"));
    setUserId(localStorage.getItem("ID"));
  }, []);

  const sendData = () => {
      console.log("shyam");
    axios
      .put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${userId}`, {
        firstName: name,
        lastName: body,
        userId: userId,
      })
      .then((res) => {
        navigate({ pathname: "/put" });
        console.log(name, body, userId, "===============================");
      });
  };

  
  console.log(body,"=================body");

  return (
    <div>
      <form
        // action={`https://jsonplaceholder.typicode.com/posts/${userId}`}
        // method="post"
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="userid"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />{" "}
        <br />
        <br />
      </form>

      <button onClick={() => sendData()}>Update User</button>
    </div>
  );
}
