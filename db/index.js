/* eslint-disable */

const friends = [
  {id: 1, firstName: 'Jeremy', lastName: 'Philipson', food: 'Pancakes', accessory: 'iPad'},
  {id: 2, firstName: 'Carolyn', lastName: 'Fine', food: 'Macaron', accessory: 'Headband'},
  {id: 3, firstName: 'Andrew', lastName: 'Greif', food: 'Pretzels', accessory: 'Music'},
  {id: 4, firstName: 'Elizabeth', lastName: 'Lafontaine', food: 'Hummus and dips', accessory: 'Earrings'},
  {id: 5, firstName: 'Dave', lastName: 'Ehrlich', food: 'Rugelach', accessory: 'Camera'},
  {id: 6, firstName: 'Alex', lastName: 'Horowitch', food: 'Watermelon', accessory: 'Sunglasses'},
  {id: 7, firstName: 'Austin', lastName: 'Blau', food: 'Chicken fingers', accessory: 'Computer'},
  {id: 8, firstName: 'Zach', lastName: 'Goldberg', food: 'Chicken wings', accessory: 'Apple Watch'},
  {id: 9, firstName: 'Jillian', lastName: 'Ellbaum', food: 'Wonton spring rolls', accessory: 'Hiking boots'},
  {id: 10, firstName: 'Jared', lastName: 'Bolnick', food: 'Bacon', accessory: 'Grill'},
  {id: 11, firstName: 'Elena', lastName: 'Latzen', food: 'Gluten free flatbread', accessory: 'Baseball hat'},
  {id: 12, firstName: 'Talyor', lastName: 'Grant', food: 'Guacamole', accessory: 'Koney bun'},
  {id: 13, firstName: 'Diana', lastName: 'Pearl', food: 'Lobster roll', accessory: 'Lily Pulitzer dress'},
  {id: 14, firstName: 'Steve', lastName: 'Collins', food: 'Anything', accessory: 'Bro tank'},
  {id: 15, firstName: 'McKenzie', lastName: 'Parks', food: '', accessory: ''}
]

const getFriends = () => {
  return friends;
}

// const getFriend = (id) => {
//   return friends.find(friend => friend.id === id*1);
// }

const getFriend = (firstName) => {
  return friends.find(friend => friend.firstName.toLowerCase() === firstName.toLowerCase());
}

module.exports = {
  getFriends,
  getFriend
}
