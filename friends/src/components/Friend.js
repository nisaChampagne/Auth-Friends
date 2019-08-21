import React from "react";

function Friend({ friend }) {
    /*using friend that was passed into Friend from FriendList instead of props( which also works)*/
  console.log("friends props", friend);

    /* shows friends from server, id, name, email and age as well as added friends  */
    /*renders friend. whatever to the screen */
  return (
    <div className="Friend">
      <div className="Friend__name">{friend.name}</div>
      <div className="Friend__email">{friend.email}</div>
      <div className="Friend__age">age: {friend.age}</div>
      <button className="btn">Delete</button>
     {/*set up for if I want to try the delete function*/}
    </div>
  );
}

export default Friend;
