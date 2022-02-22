import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [ageValue, setAgeValue] = useState(null);
  const [sex, setSex] = useState("");

  const getUsers = () => {
    axios.get("https://venbest-test.herokuapp.com/").then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    let isName = user.name.toLowerCase().includes(nameValue.toLowerCase());
    let isLastName = user.lastname
      .toLowerCase()
      .includes(lastnameValue.toLowerCase());
    let isSex = sex ? user.sex === sex : true;
    let isAge = ageValue ? user.age == ageValue : true;
    if (isName && isLastName && isAge && isSex) {
      return user;
    }
  });

  function changeCheckbox(e) {
    console.log(e, e.target);
    sex === "" ? setSex(e.target.value) : setSex("");
  }

  return (
    <>
      <div className="form">
        <form className="form_search">
          <input
            type="text"
            placeholder="Search into name"
            className="form_search-input"
            onChange={(e) => setNameValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search into lastname"
            className="form_search-input"
            onChange={(e) => setLastnameValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search into age"
            className="form_search-input"
            onChange={(e) => setAgeValue(e.target.value)}
          />
          <div className="checkbox">
            <label className="form_search-label">
              <input type="checkbox" onChange={changeCheckbox} value="m" />
              male
            </label>
            <label className="form_search-label">
              <input type="checkbox" onChange={changeCheckbox} value="f" />
              female
            </label>
          </div>
        </form>
      </div>
      <div className="card_list">
        {filteredUsers.map((user) => {
          return (
            <User
              name={user.name}
              lastname={user.lastname}
              age={user.age}
              sex={user.sex}
              key={Math.random(100)}
            />
          );
        })}
      </div>
    </>
  );
}

export default UserList;
