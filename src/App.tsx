import React from 'react';
import './App.css';
import { Person, Country } from "./components/person"

function App() {
  return (
    <div className="App">
      <Person
      name="Wojtek"
      email="wojtek@gmail.com"
      age={31}
      isMarried={true}
      friends={["Kinga", "Kamil", "Pola"]}
      country={Country.poland}
      />
    </div>
  );
}

export default App;
