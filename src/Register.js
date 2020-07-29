import React from "react";
import "./Login.css";
import { Container, Row, Col } from "reactstrap";
import JoblyApi from "./JoblyApi";
import RegisterForm from "./RegisterForm";
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
          <RegisterForm register={register} setFormErrors={setFormErrors}/>
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
