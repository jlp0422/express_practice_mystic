/* eslint-disable */

const friends = [
  {id: 1, firstName: 'Jeremy', lastName: 'Philipson', food: 'Pizza', accessory: 'iPad'},
  {id: 2, firstName: 'Carolyn', lastName: 'Fine', food: 'Veggie nuggets', accessory: 'Headband'},
  {id: 3, firstName: 'Andrew', lastName: 'Greif', food: 'Pretzels', accessory: 'Music'},
  {id: 4, firstName: 'Elizabeth', lastName: 'Lafontaine', food: 'Hummus and dips', accessory: 'Earrings'},
  {id: 5, firstName: 'Dave', lastName: 'Ehrlich', food: 'Rugelach', accessory: 'Camera'},
  {id: 6, firstName: 'Alex', lastName: 'Horowitch', food: 'Watermelon', accessory: 'Sunglasses'},
  {id: 7, firstName: 'Austin', lastName: 'Blau', food: 'Chicken fingers', accessory: 'Computer'}
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
