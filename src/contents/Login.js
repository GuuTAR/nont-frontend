import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";
import { Form, Button, Row, Col, FormControl, FormGroup, Nav } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Background from '../IMG_2481.jpg'
import { Get, Post } from '../server.js'
import Logo from '../components/Logo'
import NontSitter from './NontSitter';
import Navbar_logout from '../components/Navbar_logout'
import Searchfilter from '../components/Searchfilter'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginList, setLoginList] = useState({})
  // const [nontOwner, setNontOwner] = useState(false)
  // const [nontSitter, setNontSitter] = useState(false)
  const [show, setShow] = useState('')

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = (e) => {
    let payload = {}
    payload.username = username
    payload.password = password
    e.preventDefault()
    const fetchData = async () => {
      const result_login = await Post("login/", payload).then((d) => {
        setLoginList(d)
        setShow(d.role)
        console.log(d.role)
        console.log(d)
      })
    }
    // if (loginList.role === "Nont Owner") {
    //   setNontOwner(true)
    //   setNontSitter(false)
    // } else if (loginList.role === "Nont Sister"){
    //   setNontSitter(true)
    //   setNontOwner(false)
    //   setShow(loginList.role)
    // }
    fetchData()
  }

  return (
    <div>
      <div style={{
        border: "1px solid rgb(110, 127, 133)", borderRadius: "50px", backgroundImage: `url(${Background})`,
        height: "45%", width: "45%", position: "absolute", top: "50%", left: "50%", marginRight: "-50%",
        transform: "translate(-50%, -50%)", textAlign: "center", fontSize: "1.5vw", fontFamily: "Chalkboard SE"
      }}>

        <Form style={{
          position: "absolute", top: "50%", left: "50%",
          marginRight: "-50%", transform: "translate(-50%, -50%)"
        }}>
          <FormGroup>
            <Form.Label style={{
              color: "#1560bd", fontSize: "170%",
              fontWeight: "bold", marginBottom: "30px"
            }}>
              Nont, Community of pet lovers
          </Form.Label>
          </FormGroup>

          <FormGroup as={Row} controlId="username">
            <Form.Label column sm={4} style={{ color: "#008ecc", fontWeight: "bold" }}>
              Username
          </Form.Label>
            <Col sm={7}>
              <FormControl size="lg" autoFocus type="username" value={username}
                onChange={e => setUsername(e.target.value)} placeholder="Username" />
            </Col>
          </FormGroup>

          <Form.Group as={Row} controlId="password">
            <Form.Label column sm={4} style={{ color: "#008ecc", fontWeight: "bold" }}>
              Password
          </Form.Label>
            <Col sm={7}>
              <FormControl size="lg" type="password" value={password}
                onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Col>
          </Form.Group>
          
          <Button variant="primary" type="submit" size="lg" disabled={!validateForm()} style={{ fontWeight: "bold" }} onClick={(e) => { handleSubmit(e) }} >
            Login
          </Button>
        </Form>
      </div>
      <div>
        {/* {nontOwner && !nontSitter && <Redirect to='/Logo'/>}
        {nontSitter && !nontOwner && <Navbar_logout/>} */}
        {show==='Nont Owner' && <Redirect to={"/nontOwner/" + loginList.id} />}
        {show==='Nont Sister' && <Redirect to={"/nontSitter/" + loginList.id} />}
        {/* <Redirect to='/5555'/> */}
      </div>
    </div>
  );
}

export default Login;
