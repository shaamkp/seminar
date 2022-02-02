import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Request() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  console.log(checkbox);
  const postData = () => {
    axios
      .post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate({pathname:"/put"})
      });
  };
  return (
    <div>
      <form className="create-form">
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={postData} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
  // const [state, setState] = useState({
  //   userid: "",
  //   title: "",
  //   body: "",
  // });
  // const [details, setDetails] = useState([]);
  // const location = useLocation();

  // const handleChange = (e) => {
  //   const data = { ...state };
  //   data[e.target.name] = e.target.value;
  //   setState(data);
  //   console.log(data, "=================");
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData", state)
  //     .then((res) => {
  //       setDetails([...details, res.data]);
  //       console.log(res.data, "res");
  //     });
  // };

  // let renderItem = () => {
  //   return details.map((item) => (
  //     <div key={item.id}>
  //       <li>{item.userid}</li>
  //       <li>{item.title}</li>
  //       <li>{item.body}</li>
  //     </div>
  //   ));
}

// return (
//     <div>
//       {location.pathname === "/request " ? (
//         <h1>Im in My {location.pathname}</h1>
//       ) : (
//         ""
//       )}
//       <Container>
//         <Form action="post" onSubmit={handleSubmit}>
//           <UserId
//             type="number"
//             placeholder="UserId"
//             name="userid"
//             onChange={handleChange}
//           />
//           <Title
//             type="text"
//             placeholder="Tittle"
//             name="title"
//             onChange={handleChange}
//           />
//           <Body
//             type="text"
//             placeholder="Body"
//             name="body"
//             onChange={handleChange}
//           />
//           <Button type="submit" />
//         </Form>
//       </Container>
//       <ul>{renderItem()}</ul>
//       {location.pathname === "/request" ? (
//         <h1>Im in My {location.pathname}</h1>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default Request;

// const Container = styled.div`
//   background: black;
//   height: 300px;
// `;
// const Form = styled.form`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   width: 20%;
//   margin: 0 auto;
//   margin-top: 20px ;
// `;
// const UserId = styled.input`
//   margin-top: 20px;
// `;
// const Title = styled.input`
//   margin-top: 20px;
// `;
// const Body = styled.input`
//   margin-top: 20px;
// `;
// const Button = styled.input`
//   margin-top: 20px;
// `;
