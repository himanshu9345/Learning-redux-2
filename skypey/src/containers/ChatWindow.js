import React from "react";
import _ from "lodash";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeChats = state.messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeChats)} />
    </div>
  );
};

export default ChatWindow;
