import React, { useState } from "react";
import axios from "axios";

function AddFriend() {
  const [name, setName] = useState({
    name: "",
    age: "",
    email: "",
    id: Date.now()
  });
  const changeHandler = e => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const addFriend = e => {
    e.preventDefault(); /*stops the page from refreshing upon clicking add btn*/
    const token = localStorage.getItem("token");
    const url = "http://localhost:5000/api/friends";

    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: `${token}`
          }
        })
        .then(res => {
          console.log("friends", res.data);
        })
        .catch(err => {
          console.log(err.response);
        });
      window.location.href = window.location.href; //helps with my hacking add friend
    }
  };

  return (
    <div className="addContainer">
      <form className="form" onSubmit={event => addFriend(event)}>
        <h1 className="loginTitle">Add More Friends</h1>
        <p className="form-group">
          <label className="label">
            Name:
            <input
              className="input"
              type="text"
              name="name"
              onChange={changeHandler}
              value={name.name}
            />
          </label>
        </p>

        <p className="form-group">
          <label className="label">
            Age:
            <input
              className="input"
              type="age"
              name="age"
              onChange={changeHandler}
              value={name.age}
            />
          </label>
        </p>

        <p className="form-group">
          <label className="label">
            Email:
            <input
              className="input"
              type="email"
              name="email"
              onChange={changeHandler}
              value={name.email}
            />
          </label>
        </p>

        <button className="btn" onClick={addFriend}>
          Add Friend
        </button>
      </form>
    </div>
  );
}

export default AddFriend;
{
  /* POST REQ TO SERVER */
}
