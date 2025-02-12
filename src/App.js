import React, { useState } from 'react';
import TimeZoneList from './components/TimeZoneList';
import './styles.css';

const App = () => {
  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="app p-4">
      <h1 className="text-4xl font-bold mb-4">World Time Clock</h1>
      <button
        onClick={toggleList}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        {showList ? 'Hide Time Zones' : 'Show Time Zones'}
      </button>
      {showList && <TimeZoneList />}
    </div>
  );
};

export default App;
