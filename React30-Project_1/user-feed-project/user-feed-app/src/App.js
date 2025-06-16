import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import UserList from "./components/UserList";
export default function App() {
  const [data, updateData] = useState([]) // useState to store the data fetched from the API
  useEffect(()=>{
    // user list ko lagi api call garxa
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(response => {
        const data = response.data.results;
        updateData(data);
      })
      .catch(error => {
        console.log(error);
      });
//         axios.get(...) → Sends an HTTP GET request to the API.
//       .then(...) → Runs if the API responds successfully.
//       .catch(...) → Runs if there's an error (like network issues).
  },[]) 
  return (
      <div className="App">
        <Header title={"UserList"} />
        <div className="row d-flex justify-content-center">
          {data.map((item, index) => (
            <UserList key={index} item={item} />
          ))}
        </div>
        <br />
      <h2 className='nyapu'>Code with @Nyapu</h2>
      </div>
      
    );
}