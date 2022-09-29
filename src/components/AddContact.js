import React from "react";
import { useState } from "react";

export default function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <h3>Add Contact</h3>
      <div className=" mt-4 mb-3 row">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}value={name}
            
          />
        </div>
        <div className=" col-4">
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }} value={email}
            
          />
        </div>
        <button
          className="btn btn-primary col-2 mx-4"
          type="submit"
          onClick={() => {

            if (name === "" || email === "" || !email.includes("@") || !email.includes(".com")){
              alert("Please fill required fields")}
            else{props.addContact(name, email);setName('');setEmail('')};
          }}

        >
          Add
        </button>
      </div>
    </>
  );
}
