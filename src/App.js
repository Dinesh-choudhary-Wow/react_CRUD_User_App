import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUsers from "./components/users/AddUsers";
import EditUser from "./components/users/EditUser";
import View from "./components/users/View";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUsers />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/:id" element={<View />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
