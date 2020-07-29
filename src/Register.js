import React from "react";
import "./Login.css";
import { Container, Row, Col } from "reactstrap";
import JoblyApi from "./JoblyApi";
import RegisterForm from "./RegisterForm";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";


function Register() {
  let history = useHistory();
  const [ formErrors, setFormErrors ] = React.useState([]);
  const { doAuth } = React.useContext(UserContext);

  async function register(e){
    e.preventDefault();
    let newUserData = {
      username: e.target.username.value,
      first_name: e.target.firstname.value,
      last_name: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    try {
      const userToken = await JoblyApi.registerUser(newUserData);
      localStorage.setItem("_token", userToken);
      doAuth(newUserData);
      history.push("/jobs");
    } catch(e) {
      console.log("pase por aqui");
      console.log("errors ", formErrors);
      console.log("e ", e);
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
          {(formErrors)? formErrors.map((error, idx) => <p key={idx}>{error}</p>):""}
        </Col>
      </Row>
        
      </Container>

    </div>
  );
}

export default Register;
