import React from "react";
// import "./Profile.css";
import ProfileForm from "./ProfileForm";
import { Container, Row, Col, Alert } from "reactstrap";
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function Profile() {
  let history = useHistory();
  const [ formErrors, setFormErrors ] = React.useState([]);
  const [ userInfo, setUserInfo ] = React.useState({});
  const [ updatedStatus, setUpdatedStatus ] = React.useState(false);
  const { appUser, doAuth } = React.useContext(UserContext);

  async function update(e){
    e.preventDefault();
    setUpdatedStatus(false);
    try {
      const userUpdated = await JoblyApi.updateUser(
        {
          username: e.target.username.value || appUser.username,
          first_name: e.target.firstname.value || appUser.firstname,
          last_name: e.target.lastname.value || appUser.lastname,
          email: e.target.email.value || appUser.email,
          password: e.target.password.value
        }
      )
      doAuth(userUpdated);
      setUpdatedStatus(true);
      history.push("/profile");
    } catch(e) {
      setFormErrors(e);
    }
  }



  return (
    <div>
        <h1>Profile</h1>
        <Container>
          {(updatedStatus)? <Alert color="success">Profile updated succesfully!</Alert>:""}
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
