import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";
import { Form, Button, Row, Col, FormControl, FormGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Background from '../IMG_2481.jpg'
import { Get, Post } from '../server.js'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginList, setLoginList] = useState({})

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = (e) => {
    let payload = {}
    payload.username = username
    payload.password = password
    e.preventDefault()
        const fetchData = async () => {
            const result_login = await Post("login/",payload).then((d) => {
                setLoginList(d)
                console.log(d)
            })
        }
        fetchData()
    if (loginList.role === "Pet Owner") {
      return (<Link to="/Navbar_logout"></Link>)
    }else {
      return (<Link to="/Logo"></Link>)
    }
  }

  return (
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

        {/* <Link to="/Navbar_logout"> */}
          <Button variant="primary" type="submit" size="lg" disabled={!validateForm()} style={{ fontWeight: "bold" }} onClick={(e) => { handleSubmit(e) }}>
            Login
        </Button>
        {/* </Link> */}
      </Form>
    </div>
  );
}

export default Login;
