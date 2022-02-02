import { React, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function GetRequest() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
      console.log(data);
      
    });
  }, []);
  console.log(data);

  

  let renderItems = () => {
    return data.map((item) => (
      <li key={item.id}>
        <p style={{ color: "red" }}>{item.userId}</p>
        <p style={{ color: "blue" }}>{item.title}</p>
        <p style={{ color: "green" }}>{item.body}</p>
      </li>
    ));
  };
  return (
    <div>
      {location.pathname === "/getreq" ? (
        <h1>Im in My {location.pathname}</h1>
      ) : (
        ""
      )}
      <ul>{renderItems()}</ul>
    </div>
  );
}

export default GetRequest;
