import React from "react";
import "./Login.css";
import { Container, Form, Input, Button, FormGroup, Label, Row, Col } from "reactstrap";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom";


function Login() {
  let history = useHistory();
  const [ authError, setAuthError ] = React.useState("");
  const {doAuth} = React.useContext(UserContext);

  async function authenticate(e){
    e.preventDefault();
    const username = e.target.username.value;

    // Attempt to authenticate user
    try {
      const userToken = await JoblyApi.authenticateUser(
        {
          username,
          password: e.target.password.value
        }
      )
      localStorage.setItem("_token", userToken);
    } catch(e) {
      setAuthError(e[0]);
      return;
    }

    // If user was authenticated, upload user data to context
    try {
      const userData = await JoblyApi.getUser(username);
      doAuth(userData);
      history.push("/profile");
    } catch(e) {
      setAuthError(e[0]);
    }
    
  }

  return (
    <div>
        <h2>Login</h2>

      <Container>
      <Row>
        <Col sm={{ size: 4, offset: 4 }}>
          <Form onSubmit={authenticate}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" onChange={()=> setAuthError("")} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" onChange={()=> setAuthError("")}/>
            </FormGroup>
            <p>{(authError)? authError: ""}</p>
            <Button color="success">Submit</Button>
          </Form>
        </Col>
      </Row>
        
      </Container>

    </div>
  );
}

export default Login;
