export const addTap = (tap) => {
  const { img, name, brand, price, abv, pints, message, id }  = tap;
  return {
    type: 'ADD_TAP',
    img: img,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pints: pints,
    message: message,
    id: id
  }
}