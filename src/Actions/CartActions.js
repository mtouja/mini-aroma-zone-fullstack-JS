export const ADD = 'cart: addCartActions';
export const REMOVE = 'cart: removeCartActions';

export const addCartAction = (article) => {
  return {
    type: ADD,
    payload: {
      article: article
    }
  }
}

export const removeCartAction = (id) => {
  return {
    type: REMOVE,
    payload: {
      id: id
    }
  }
}


  
