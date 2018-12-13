import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      password2: "",
      email: "",
      surname: "",
      name: "",
      sex: 0
    }

    this.disabledSubmitButton = true;
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit = () => {
    axios.post('http://localhost:8000/account/create', {
      password: this.state.password,
      email: this.state.email,
      surname: this.state.surname,
      name: this.state.name,
      sex: this.state.sex
    })
    .then((res) => {
      console.log("done !")
    })
    .catch((err) => {
      console.log("erreur :", err);
    })
  }

  render() {
    if(this.state.email.length > 0 && 
       this.state.name.length > 0 && 
       this.state.surname.length > 0 &&
       this.state.password.length > 0 &&
       this.state.password2.length > 0) {
         if(this.state.password === this.state.password2) {
            this.disabledSubmitButton = false;
          } else {
           this.disabledSubmitButton = true;
          }
        } else {
          this.disabledSubmitButton = true;
        }
    return (
    <Card className="card-login" className="mt-3 mb-3">
      <CardHeader tag="h3"><div className="display-4">Create your account</div></CardHeader>
      <Form onSubmit={this.handleSubmit()}>
        <CardBody>
          <Row form className="align-self-center">
            <Col md={12}>
              <FormGroup>
                <Label for="current-email">Email</Label>
                <Input type="email" name="email" id="email" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="current-password">Password</Label>
                <Input type="password" name="password" id="password" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="current-password">Confirm your password</Label>
                <Input type="password" name="password2" id="password2" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="current-email">Name</Label>
                <Input type="text" name="name" id="name" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="current-email">Surname</Label>
                <Input type="text" name="surname" id="surname" onChange={this.handleChange} />
              </FormGroup>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="genre" id="sex" onChange={this.handleChange} checked />
                <label class="form-check-label" for="option1">
                  Monsieur
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="genre" id="sex" onChange={this.handleChange} />
                <label class="form-check-label" for="option2">
                  Madame
                </label>
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-muted">
          <Button color="primary" type="submit" disabled={this.disabledSubmitButton}>Confirm</Button>
          <a color="link" href="/" className="float-right">Home</a>
        </CardFooter>
      </Form>
    </Card>
    )
  }
}

export default Signup;
