import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { Person, Country } from "./components/person"
import { Contact } from "./pages/contact"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { NavBar } from "./pages/NavBar"
import { Provider } from 'react-redux';
import { store } from "./pages/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      </Provider>

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
