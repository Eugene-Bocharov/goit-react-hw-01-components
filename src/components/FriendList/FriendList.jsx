import React from "react";
import FriendlistItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import "./FriendList.css";

function FriendList({ friends_list }) {
  return (
    <React.Fragment>
      <h1 className="ProfileTitle">List of Friends</h1>

      <ul className="friend-list">
        {friends_list.map((friend) => {
          return (
            <FriendlistItem
              status={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
              id={friend.id}
              key={friend.id}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
}

FriendList.propTypes = {
  friends_list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
    
  ),
};

export default FriendList;
