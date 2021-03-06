import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import CreateRecipe from './components/CreateRecipe';
function App() {
  return (
    <React.Fragment> 
    <Route exact path= '/' component={LandingPage}/>
    <Route exact path= '/home' component={Home}/>
    <Route exact path= '/recipes/:id' component={CardDetail}/>
    <Route exact path= '/recipes/' component={CreateRecipe}/>
   </React.Fragment>
  );
}

export default App;
