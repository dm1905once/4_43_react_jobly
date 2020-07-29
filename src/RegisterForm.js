import React from "react";
import "./Login.css";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";

function RegisterForm({ register, setFormErrors }){

    return (
        <Form onSubmit={register}>
            <FormGroup>
                <Label for="username">Username</Label>
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
    )
}

export default RegisterForm;