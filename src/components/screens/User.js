import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      console.log(res.data.data);
      setUser(res.data.data);
    });
  }, []);

  let renderItems = () => {
    return user.map((item) => (
      <li key={item.id}>
        <Link to={`/users/${item.id}`}>
          <img src={item.avatar} alt="Image" />
        </Link>
        <h3>
          {item.first_name} 
          {item.last_name}
        </h3>
      </li>
    ));
  };

  return (
    <div>
      {location.pathname === "/user" ? (
        <h1>Im in My {location.pathname}</h1>
      ) : (
        ""
      )}
      <ul className="container">{renderItems()}</ul>
    </div>
  );
}

export default User;
