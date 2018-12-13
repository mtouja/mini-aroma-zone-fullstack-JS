import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Table , Card, Button, CardBody, CardHeader, CardTitle } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { countTotalPrice } from '../Utils/Utils';
import './Checkout.css';

class Checkout extends Component {
  render() {
    if(this.props.cart.length === 0) {
      return <Redirect to='/' />
    } else {
      return (
        <Row className='mt-3'>
          <Col md={12}>
            <Card>
              <CardBody>
                <CardTitle >
                  <p className='lead'>Validation</p>
                </CardTitle>
                <Table borderless>
                  <thead>
                    <tr>
                      <th>Article</th>
                      <th>Prix</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cart.map((article, index) => {
                      return (
                    <tr key={index}>
                      <th scope='row' width='50%'>{article.name}</th>
                      <td width='50%'>{article.price} €</td>
                    </tr>
                      )
                    })}
                  </tbody>
                </Table >  
                <Row>
                  <Col md={8}>
                  
                  </Col>
                  <Col md={4}>
                    <Card>
                      <CardHeader>
                        Price details
                      </CardHeader>
                      <Table borderless>
                        <tbody>
                          <tr>
                            <td>HT</td>
                            <td className='float-right'>{countTotalPrice(this.props.cart) - countTotalPrice(this.props.cart)*0.20}€</td>
                          </tr>
                          <tr>
                            <td>TVA (20%)</td>
                            <td className='text-right'>{(countTotalPrice(this.props.cart)*0.20).toFixed(2)}€</td>
                          </tr>
                          <tr>
                            <td className='font-weight-bold lead'>TTC</td>
                            <td className='float-right font-weight-bold lead'>{countTotalPrice(this.props.cart)}€</td>
                          </tr>
                        </tbody>
                      </Table>
                      </Card>
                        <Button color='danger' className='float-left cancel'>Annuler</Button>
                        <Button color='success' className='float-right confirm'>Confirmer</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
    }
  }
}

const mapStateToProps = store => ({
  cart: store.cart,
  calculTotalPrice: store.calculTotalPrice
});

export default connect(mapStateToProps)(Checkout);
