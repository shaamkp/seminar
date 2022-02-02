import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Update() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(null);

  const sendData = () => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      name,
      body,
      userId,
    });
  };

  useEffect(() => {
    setName(localStorage.getItem("TITLE"));
    setBody(localStorage.getItem("BODY"));
    setUserId(localStorage.getItem("ID"));
  });

  return (
    <div>
      <form action={`https://jsonplaceholder.typicode.com/posts/${userId}`} method="post">
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

      <button onClick={sendData}>Update User</button>
    </div>
  );
}
