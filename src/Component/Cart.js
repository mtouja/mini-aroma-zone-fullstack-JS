import React, { Component } from 'react';
import { Col, Table , Card, CardFooter, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { removeCartAction } from '../Actions/CartActions';
import { Link } from 'react-router-dom';
import { countTotalPrice } from '../Utils/Utils';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <Col md={4}>
        <Card className='mt-5'>
          <CardBody>
            <p className='title'>Mon Panier </p>
            <Table striped>
              <tbody>
              {this.props.cart.map((article, index) => {
                  return(
                    <tr key={index}>
                      <th scope="row" width="50%">{article.name}</th>
                      <td width="20%">{article.price} €</td>
                      <td width="20%">
                      <a href='#'onClick={() => {this.props.removeFromCart(index)}} className="float-right">Supprimer</a>
                    </td>
                  </tr>  
                  )
                })}                    
              </tbody>
            </Table >
          </CardBody>
          <CardFooter>
            <h3>Prix total: <span className='float-right'>{countTotalPrice(this.props.cart)}€</span></h3>
          </CardFooter>
        </Card>
        {this.props.cart.length === 0 ? null : <Link to='/checkout'><Button color='success' className='mt-3' size='md'>Checkout</Button></Link>}
      </Col>
    );
  }
}

const mapStateToProps = store => ({
  cart: store.cart
});

const mapActionToProps = {
  removeFromCart: removeCartAction
};

export default connect(mapStateToProps, mapActionToProps) 
(Cart);


