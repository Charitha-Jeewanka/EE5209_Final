import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import CreateCard from "./pages/CreateCard";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/destinations">
          <Destinations />
        </Route>
        <Route path="/experiences">
          <Experiences />
        </Route>
        <Route path="/create">
          <CreateCard />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
