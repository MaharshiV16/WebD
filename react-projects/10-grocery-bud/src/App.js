import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import uniqid from "uniqid";
function getLocalStorage() {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, "danger", "Please Enter Value");
    } else if (name && isEdit) {
      //deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Value Changed");
    } else {
      //show alert
      showAlert(true, "success", "Item Added");
      const newItem = {
        id: uniqid(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  }
  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }
  function clearList() {
    showAlert(true, "danger", "Empty List");
    setList([]);
  }
  function removeItem(id) {
    showAlert(true, "danger", "Item Removed");
    setList(list.filter((item) => item.id !== id));
  }
  function editItem(id) {
    const specific = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specific.title);
  }
  useEffect(() => localStorage.setItem("list", JSON.stringify(list)), [list]);
  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grovery Buddy</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            {isEdit ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>
          Clear Items
        </button>
      </div>
    </section>
  );
}

export default App;
