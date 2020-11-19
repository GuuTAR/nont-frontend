import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NontOwner from './contents/NontOwner'
import React_test from './contents/react-test'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={React_test} />
        <Route exact path="/login" />
        <Route exact path="/nontowner" component={NontOwner}/>
        {/* <Route exact path="/nontsitter" component={NontSitter} /> */}
      </div>
    </Router>
  )
}

export default App;
