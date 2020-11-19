import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React_test from './contents/react-test'
import Navbar_logout from './components/Navbar_logout'
import Navbar_back from './components/Navbar_back'
import Login from './contents/Login'
import Logo from './components/Logo'
import ShelterList from './components/ShelterList'

function App() {
  return (
    <Router>
      <ShelterList/>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Navbar_logout" component={Navbar_logout} />
      </div>
    </Router>
  )
}

export default App;
