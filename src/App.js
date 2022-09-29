import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useState,useEffect } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  let removeContact=(id)=>{
    setList(list.filter((currentId)=>{
      return currentId.id !== id
    }))
    
  }
  let addContact = (name, email) => {
    let newList = [...list];
    newList.push({
      id: uuid(),
      name: name,
      email: email,
    });
    setList(newList);
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);
  return (
    <>
      <Header title="Contact List" />
      <div className="container my-3 ">
        {" "}
        <AddContact addContact={addContact} />
      </div>
      <ContactList contactlist={list} onDelete={removeContact} />
    </>
  );
}

export default App;
