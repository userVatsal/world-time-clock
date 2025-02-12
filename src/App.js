import React from 'react';
import TimeZoneList from './components/TimeZoneList';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>World Time Clock</h1>
      <TimeZoneList />
    </div>
  );
};

export default App;

