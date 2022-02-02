import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";

function SingleUser() {
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      console.log(res.data.data);
      setSingle(res.data.data);
    });
  }, []);

  return (
    <div>
      {location.pathname === `/single/${id}` ? (
        <h1>Im in  {location.pathname}</h1>
      ) : (
        ""
      )}
      <ul>
        <li>
          <img src={single.avatar} alt="Image" />
          <h3>
            {single.first_name}
            {single.last_name}
          </h3>
          <p>{single.email}</p>
        </li>
      </ul>
    </div>
  );
}

export default SingleUser;
