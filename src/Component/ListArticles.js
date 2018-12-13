import React, { Component } from 'react';
import { Col, Table , Card, CardFooter, CardBody, CardTitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCartAction } from '../Actions/CartActions';

import './ListArticles.css';

class ListArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], 
      nbrPages: 0
    }

    this.getArticlesPerPage(0);

    axios.get('http://localhost:8000/articles/pages')
    .then((result => {
      this.setState({nbrPages: result.data[0].pages});
    }))
  }

  getArticlesPerPage = (page) => {
    axios.get(`http://localhost:8000/articles/pages/${page}`)
    .then((result) => {
      this.setState({ articles: result.data })
    });
  }

  pagination() {
    let pagination = [];

    for(let i = 0; i < this.state.nbrPages; i++) {
      pagination = [...pagination, <PaginationItem key={i} onClick={()=> {this.getArticlesPerPage(i)}}><PaginationLink href='#'>{i+1}</PaginationLink></PaginationItem>]
    }

    return pagination;
  }
  
  render() {
    return(
      <Col md={8}>
        <Card className='mt-5'>
          <CardBody>
            <CardTitle className='title'>
              <p className='h2'>Ma liste de courses</p>
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
                {this.state.articles.map((article, index) => {
                  return (
                    <tr key={index}>
                      <th scope='row' width='50%'>{article.name}</th>
                      <td>{article.price} €</td>
                      <td>
                        <a href='#'className='float-right'onClick={() => {this.props.addToCart({name: article.name, price: article.price})}}>Ajouter</a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table >  
          </CardBody>
          <CardFooter>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous href='#' />
              </PaginationItem>
                {this.pagination()}
              <PaginationItem>
                <PaginationLink next href='#' />
              </PaginationItem>
            </Pagination>
          </CardFooter>
        </Card>
      </Col>
    )
  }
}

const mapActionToProps = {
  addToCart: addCartAction
};



export default connect(null, mapActionToProps)(ListArticles);