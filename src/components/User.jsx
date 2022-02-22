import React from "react";

function User({ name, lastname, age, sex, index }) {
  return (
    <>
      <div className="card" key={index}>
        <div className="card-body">
          <h1 className="card-title">Name: {name}</h1>
          <h1 className="card-title">Lastname: {lastname}</h1>
          <h1 className="card-title">Age: {age}</h1>
          <h1 className="card-title">Sex: {sex}</h1>
        </div>
      </div>
    </>
  );
}

export default User;
