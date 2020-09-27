import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavbarView';
// import { Nav } from 'reactstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {createHashHistory} from 'history';
import AddBook  from '../src/components/AddBook'

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Book = () => <h1>Book</h1>;

const customHistory = createHashHistory();

function App() {
  // return (<div>Hello!!  </div>)
  return (
    <React.Fragment>
    <Router history={customHistory}>
      <div className="App">
        <NavBar />
          <Switch>
              <Route path="/" exact component={Home}/>
             <Route path="/about" exact component={About}/>
             <Route path="/addbook" exact component={AddBook}/> 
           </Switch> 
        </div>
    </Router>
    </React.Fragment>
  )
}

export default App;
