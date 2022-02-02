import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Put() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [body, setBody] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);

  const setID = (id, title, body) => {
    console.log(id);
    console.log(title);
    console.log(body);
    localStorage.setItem("ID", id);
    localStorage.setItem("TITLE", title);
    localStorage.setItem("BODY", body);
  };

  

  
  console.log(userId, "================id");
  console.log(name, "================name");
  console.log(body, "================bosy");

  return (
    <div className="App">
      <table border="1">
        <tbody>
          <tr className="table-head">
            <td>ID</td>
            <td>name</td>
            <td>userid</td>
            <td>body</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.userId}</td>
              <td>{item.body}</td>
              <td>
                <button className="delete">Delete</button>
              </td>
              <td>
                <Link to="/update">
                  <button
                    className="update"
                    onClick={() => setID(item.id, item.title, item.body)}
                  >
                    update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
    </div>
  );
}
