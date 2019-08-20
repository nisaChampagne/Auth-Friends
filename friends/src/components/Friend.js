import React from 'react';

function Friend ({friend}) {
 console.log('friends props', friend)

    return (
      <div className="Friend">
        <div className="Friend__name">{friend.name}</div>
        <div className="Friend__email">{friend.email}</div>
        <div className="Friend__age">age: {friend.age}</div>
          <button
            className="btn">Delete</button>
      </div>
    );
  }

export default Friend;