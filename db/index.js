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
  {id: 11, firstName: 'Elena', lastName: 'Latzen', food: 'Gluten free flatbread', accessory: 'Baseball hat'}
]

const getFriends = () => {
  return friends;
}

const getFriend = (id) => {
  return friends.find(friend => friend.id === id*1);
}

module.exports = {
  getFriends,
  getFriend
}
