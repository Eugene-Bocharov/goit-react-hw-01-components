import React from "react";
import PropTypes from "prop-types";
import "./FriendListItem.css";

function FriendListItem({ status, avatar, name}) {
  return (
    <li className="item">
      <span className={status ? "status_active" : "status_disable"}></span>
      <img className="avatar_icon" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default FriendListItem;
