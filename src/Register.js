import React from "react";
import "./Login.css";
import { Container, Form, Input, Button, FormGroup, Label, Row, Col } from "reactstrap";
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";


function Register({doAuthenticate}) {
  let history = useHistory();
  const [ formErrors, setFormErrors ] = React.useState([]);

  async function register(e){
    e.preventDefault();
    try {
      const userToken = await JoblyApi.registerUser(
        {
          username: e.target.username.value,
          first_name: e.target.firstname.value,
          last_name: e.target.lastname.value,
          email: e.target.email.value,
          password: e.target.password.value
        }
      )
      localStorage.setItem("_token", userToken);
      doAuthenticate();
      history.push("/profile");
    } catch(e) {
      setFormErrors(e);
    }
  }

  return (
    <div>
        <h2>Register</h2>

      <Container>
      <Row>
        <Col sm={{ size: 4, offset: 4 }}>
          <Form onSubmit={register}>
            <FormGroup>
              <Label for="username">UserName</Label>
              <Input type="text" name="username" id="username" onChange={()=> setFormErrors([])} />
            </FormGroup>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input type="text" name="firstname" id="firstname" onChange={()=> setFormErrors([])} />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input type="text" name="lastname" id="lastname" onChange={()=> setFormErrors([])} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" onChange={()=> setFormErrors([])} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" onChange={()=> setFormErrors([])}/>
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          {formErrors.map((error, idx) => <p key={idx}>{error}</p>)}
        </Col>
      </Row>
        
      </Container>

    </div>
  );
}

export default Register;
