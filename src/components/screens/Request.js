import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Request() {
  const [state, setState] = useState({
    userid: "",
    title: "",
    body: "",
  });
  const [details, setDetails] = useState([]);

  const handleChange = (e) => {
    const data = { ...state };
    data[e.target.name] = e.target.value;
    setState(data);
    console.log(data, "=================");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userid: state.userid,
        title: state.title,
        body: state.body,
      })
      .then((res) => {
        setDetails(res.data);
        console.log(res.data, "res");
      });
  };

  let renderItem = () => {
    return details.map((item) =>
      (<h1>Shyam</h1>)(
        <>
          {/* <h1>{item.userid}</h1> */}
          <h1>Shyam</h1>
        </>
      )
    );
  };

  return (
    <div>
      <h1>Request</h1>
      <Container>
        <Form action="post" onChange={handleSubmit}>
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
        <div>{renderItem}</div>
      </Container>
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
