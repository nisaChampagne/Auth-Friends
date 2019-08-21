import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utillities/axiosWithAuth";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

function FriendList({ history }) {
  const [friends, setFriends] = useState("");
  useEffect(() => {
    AxiosWithAuth()
    .get("http://localhost:5000/api/friends")
        .then(response => {
          setFriends(response.data);
        })
        .catch(e => {
          console.log(e.response.data);
          localStorage.removeItem("token");
          history.push("/");
        });
    }, [history]);

  return (
    <div className="holder">
      <AddFriend />
      {friends.length > 0
        ? friends.map(friend => <Friend key={friend.id} friend={friend} />)
        : null}

      <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default FriendList;

  /* GET REQ TO SERVER */

