import React from 'react';
import logo from './logo.svg';
import Calendar from './components/Calendar'
import NewAppointments from './components/NewAppointments'
import './App.css';

function App() {
  return (
    <div className="App">
        <Calendar />
        <NewAppointments />
    </div>
  );
}

export default App;