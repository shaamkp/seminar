import axios from "axios";
import { React,  useState } from "react";

export default function Put() {
const updateData  = () => {
    const data = {
      userId: "2334",
      id: "2233",
      title: "shyam",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", data)
      .then((data) => {
        console.log(data.data);
      });
}

const deletData = () =>{
    const data = {
      userId: "2334",
      id: "2233",
      title: "shyam",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    }

    axios.delete("https://jsonplaceholder.typicode.com/posts/1",data)
    .then((data) =>{
        console.log(data.data);
    })
    .catch((err) =>{
        console.log(err);
    })
}
      
   
  return (
    <div>
      <h1>Put and Delete Request</h1>
      <p>Welcome to axios Demo</p>
      <button onClick={updateData}>Update</button>
      <button onClick={deletData}>Delete</button>
    </div>
  );
}
