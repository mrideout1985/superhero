import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Search } from './components/search/Search';
import HeroInfo from "./components/HeroInfo/HeroInfo"
import { Header } from './components/Header/Header';

function App() {
  return (
    <Router>
    <div className="App">
<Header/>
     <Switch>
       <Route path="/hero-info/:id">
              <HeroInfo/>
       </Route>
     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
