import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Put() {
  const [users, setUser] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      });
  }, []);

  const getItems = () =>{
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }
 
const postData = (e) => {
  e.preventDefault();
  console.log("shyam");
  axios
    .post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
      firstName: firstName,
      lastName: lastName,
      checkbox: checkbox,
    })
    .then((res) => {
      console.log(res);
      navigate({ pathname: "/put" });
    });
};
  const setID = (id, firstName, lastName) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("FNAME", firstName);
    localStorage.setItem("LNAME", lastName);
  };

  const DeleteItems = (id) => {
    axios
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getItems();
      });
  };
console.log(firstName,"...................");
  return (
    <div className="App">
      <table border="1">
        <tbody>
          <tr className="table-head">
            <td>ID</td>
            <td>Firstname</td>
            <td>Last name</td>
            {/* <td>body</td> */}
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>
                <button className="delete" onClick={() => DeleteItems(item.id)}>
                  Delete
                </button>
              </td>
              <td>
                <Link to="/update">
                  <button
                    className="update"
                    onClick={() =>
                      setID(item.id, item.firstName, item.lastName)
                    }
                  >
                    update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add">
        <form>
          <label>First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          <label className="lastname">Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          <button onClick={(e) => postData(e)}  className="button">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}
