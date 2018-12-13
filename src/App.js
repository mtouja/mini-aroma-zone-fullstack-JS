import React, { Component } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import ListArticles from './Component/ListArticles';
import Cart from './Component/Cart';
import Menu from './Component/Menu';
import Checkout from './Component/Checkout';
import SignUp from './Component/Signup';
import Login from './Component/Login';

import { Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  setLanguage(lang) {
    console.log(lang);
    axios.get(`${process.env.PUBLIC_URL}/Trads/${lang}.json`)
    .then(function(result) {
      console.log(result)
    })
  }

  render() {
    return (
      <Container>
        <Menu />
        <Route exact path='/' render={() => 
          <Row className='mt-3'>
            <ListArticles />
            <Cart /> 
          </Row>
        } />
        <Route exact path='/checkout' component={Checkout} /> 
        <Route path='/account/create' component={SignUp} />
        <Route path='/account/login' component={Login} />
        {/* <button onClick={() => {this.setLanguage("<FR")}}>FR</button> |  <a onClick={() => {this.setLanguage("EN")}}>EN</a> */}
      </Container>
    );
  }
}

export default App;
