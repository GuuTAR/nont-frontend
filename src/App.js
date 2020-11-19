import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import NontOwner from './contents/NontOwner'
import NontSitter from './contents/NontSitter'
import Searchfilter from './components/Searchfilter'
import React_test from './contents/react-test'
import Login from './contents/Login'
import Navbar_logout from './components/Navbar_logout'
import Logo from './components/Logo'

function App() {
  return (
    <Router>
      {/* <ShelterList/> */}
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Navbar_logout" component={Navbar_logout} />
        <Route exact path="/Logo" component={Logo} />
      </div>
    </Router>
    
  )
}

export default App;
