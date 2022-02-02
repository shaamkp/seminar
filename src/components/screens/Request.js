import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Request() {
  const [state, setState] = useState({
    userid: "",
    title: "",
    body: "",
  });
  const [details, setDetails] = useState([]);
  const location = useLocation();

  const handleChange = (e) => {
    const data = { ...state };
    data[e.target.name] = e.target.value;
    setState(data);
    console.log(data, "=================");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", state)
      .then((res) => {
        setDetails([...details, res.data]);
        console.log(res.data, "res");
      });
  };

  let renderItem = () => {
    return details.map((item) => (
      <div key={item.id}>
        <li>{item.userid}</li>
        <li>{item.title}</li>
        <li>{item.body}</li>
      </div>
    ));
  };

  return (
    <div>
      {location.pathname === "/request " ? (
        <h1>Im in My {location.pathname}</h1>
      ) : (
        ""
      )}
      <Container>
        <Form action="post" onSubmit={handleSubmit}>
          <UserId
            type="number"
            placeholder="UserId"
            name="userid"
            onChange={handleChange}
          />
          <Title
            type="text"
            placeholder="Tittle"
            name="title"
            onChange={handleChange}
          />
          <Body
            type="text"
            placeholder="Body"
            name="body"
            onChange={handleChange}
          />
          <Button type="submit" />
        </Form>
      </Container>
      <ul>{renderItem()}</ul>
      {location.pathname === "/request" ? (
        <h1>Im in My {location.pathname}</h1>
      ) : (
        ""
      )}
    </div>
  );
}

export default Request;

const Container = styled.div`
  background: black;
  height: 300px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 20%;
  margin: 0 auto;
  margin-top: 20px ;
`;
const UserId = styled.input`
  margin-top: 20px;
`;
const Title = styled.input`
  margin-top: 20px;
`;
const Body = styled.input`
  margin-top: 20px;
`;
const Button = styled.input`
  margin-top: 20px;
`;
