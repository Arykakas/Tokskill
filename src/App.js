import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";
import Different from "./components/Different";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import Download from "./components/Download";
import Affliation from "./components/Affliation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="Tokskill-container">
        <Banner />
        <Welcome />
        <Different />
        <WhyChooseUs />
        <Courses />
        <Affliation />
        <Download />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
