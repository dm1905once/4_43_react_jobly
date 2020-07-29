import React from "react";
import "./Login.css";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";

function ProfileForm({update, setFormErrors, userData={}}){

    return (
        <Form onSubmit={update}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" readOnly value={userData.username}/>
            </FormGroup>
            <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input type="text" name="firstname" id="firstname"  placeholder={userData.first_name}
                onChange={()=> setFormErrors([])} />
            </FormGroup>
            <FormGroup>
                <Label for="lastname">Last Name</Label>
                <Input type="text" name="lastname" id="lastname" placeholder={userData.last_name}
                onChange={()=> setFormErrors([])} />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder={userData.email}
                onChange={()=> setFormErrors([])} />
            </FormGroup>
            <FormGroup>
                <Label for="password">Please re-authenticate with your password</Label>
                <Input type="password" name="password" id="password"
                onChange={()=> setFormErrors([])} />
            </FormGroup>
            <Button color="success">Edit Profile</Button>
        </Form>
    )
}

export default ProfileForm;