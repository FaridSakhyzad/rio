import { useState } from "react";

import Header from "./components/header";
import Inbounds from "./components/inbounds";
import Chats from "./components/chats";

import './common.scss';

function App() {
  const [ activeTabName, setActiveTabName ] = useState('chats');

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTabName(tabName);
  }
  return (
    <div className="aside">
      <div className="container">
        <Header/>

        <div className="mainTabs">
          <div
            className={`mainTab ${activeTabName === 'inbound' ? 'isActive' :  ''}`}
            onClick={(e) => handleTabClick(e, 'inbound')}
          >Inbound</div>
          <div
            className={`mainTab ${activeTabName === 'chats' ? 'isActive' :  ''}`}
            onClick={(e) => handleTabClick(e, 'chats')}
          >Chats</div>
          <div
            className={`mainTab ${activeTabName === 'tasks' ? 'isActive' :  ''}`}
            onClick={(e) => handleTabClick(e, 'tasks')}
          >Tasks</div>
        </div>

        {activeTabName === 'inbound' && (
          <Inbounds />
        )}

        {activeTabName === 'chats' && (
          <Chats />
        )}
      </div>
    </div>
  );
}

export default App;
