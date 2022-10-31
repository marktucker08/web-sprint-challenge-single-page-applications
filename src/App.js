import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";

function Home(props) {
  return (
  <>
  <div className="App-image">
    <h3>Hungry, Hungry Coders</h3>
    <Link to="/pizza" id="order-pizza"><button id="order-pizza">Order Now!</button></Link>
  </div>
  </>
  )
}

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <BrowserRouter>
      <h1>Bloomtech Eats</h1>
      <nav className="App-link">
        <Link to="/" id="home"><button>Home</button></Link>
        <Link to="/pizza" id="order-pizza"><button>Order</button></Link>
      </nav>
    
    
      <Route exact path="/" component={Home} />
      <Route path="/pizza" component={Form} /> 
      </BrowserRouter>
    </header>
    </div>
  );
};
export default App;
