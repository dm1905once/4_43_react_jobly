import React from "react";
// import "./Profile.css";
import ProfileForm from "./ProfileForm";
import { Container, Row, Col } from "reactstrap";
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function Profile() {
  const [ formErrors, setFormErrors ] = React.useState([]);
  const [ userInfo, setUserInfo ] = React.useState({});
  const { appUser } = React.useContext(UserContext);

  // React.useEffect(()=>{
  //   try{
  //     const userData = await JoblyApi.getUser()
  //   }
  // }, [])

  async function update(e){
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
    } catch(e) {
      setFormErrors(e);
    }
  }



  return (
    <div>
        <h1>Profile</h1>
        <Container>
      <Row>
        <Col sm={{ size: 4, offset: 4 }}>
        <ProfileForm update={update} setFormErrors={setFormErrors} userData={appUser}/>
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

export default Profile;
