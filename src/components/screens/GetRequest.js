import { React, useEffect, useState } from "react";
import axios from "axios";

function GetRequest() {
  const [data, setData] = useState([]);

 useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
     setData(response.data);
     console.log(data);
   });
 }, []);

  let renderItems = () => {
    return data.map((item) => (
      <>
        <li style={{ color: "red" }}>
          <h1>{item.userId}</h1>
        </li>
        <li style={{ color: "green", fontWeight: 700 }}>{item.title}</li>
        <li style={{ color: "blue", fontWeight: 800 }}>{item.body}</li>
      </>
    ));
  };
  return (
    <div>
      <ul>{renderItems()}</ul>
    </div>
  );
}

export default GetRequest;
