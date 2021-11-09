import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import PaisDetalle from './components/PaisDetalle';
import CreateCountry from './components/CreateCountry';
import CreateActivity from './components/CreateActivity';
import ActivityDetalle from './components/ActivityDetalle';
import AddCountryActivity from './components/AddCountryActivity';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
        <Route exact path="/activity" component={CreateActivity}/>
        <Route path="/countries/:idoname" component={PaisDetalle}/>
        <Route exact path="/countries" component={CreateCountry}/>
        <Route exact path="/activities" component={ActivityDetalle}/>
        <Route exact path="/countryactivity" component={AddCountryActivity}/>
        <Route exact path="/about" component={About}/>
        <Redirect from="*" to="/home" />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
