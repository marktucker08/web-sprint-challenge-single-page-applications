import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";

function Home(props) {
  const { push } = props.history;

  return (
  <>
  <div className="App-image">
    <h3>Hungry, Hungry Coders</h3>
    <button id="order-pizza" onClick={() => push("/pizza")}>Order Now!</button>
  </div>
  </>
  )
}

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Bloomtech Eats</h1>
      <nav className="App-link">
        <Link to="/" id="home"><button>Home</button></Link>
        <Link to="/pizza"><button>Order</button></Link>
      </nav>
    
    
      <Route exact path="/" component={Home} />
      <Route path="/pizza" component={Form} /> 
    </header>
    </div>
  );
};
export default App;
