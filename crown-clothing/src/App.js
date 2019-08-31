import React from 'react';
import { Route , Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>HATS PAGE !!</div>
);



function App() {
  return (
    <div>
      <Switch>
        <Route path = "/" exact component = {HomePage}/>
        <Route path = "/shop/hats" exact component = {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;


