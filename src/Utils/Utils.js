
export const countTotalPrice = (cart) => {
  let totalPrice = 0;
  cart.map(article => {
    return totalPrice += article.price;
  })
  return totalPrice.toFixed(2);
}

