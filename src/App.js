import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";

import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from './transactions.json';

import ProfileTitle from "./components/Profile/ProfileTitle.jsx";
import ProfileCard from "./components/Profile/Profile.jsx";

import FriendList from './components/FriendList/FriendList.jsx'

import Statistic from'./components/Statistics/Statistics.jsx'

import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'

function App() {
  return (
    <div>
      <ProfileTitle />

      <ProfileCard
         username={user.username}
         tag={user.tag} 
         location={user.location} 
         avatar={user.avatar}
         stats={user.stats} 
      /> 

      <Statistic title='Upload Files' stats={data}  />
      <Statistic stats={data}  />

<FriendList 
    friends_list={friends}
/>

<TransactionHistory items={transactions} />
    </div>
  );
}


export default App;
