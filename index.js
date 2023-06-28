const redux = require("redux");

// Cake Shop
/**
 * Entities
 * --------
 * Shop-Stores cake on a shelf
 * Shopkeeper-Behind the counter
 * Customer-At the store entrance
 *
 *
 * Activities
 * ----------
 * Customer-Order a cake
 * Shopkeeper-Box a cake from the shelf
 *           -Receipt to keep track
 */

// {
//     type: "Order a cake";
//     quantity: 3
// }

const initialState = {
  numberOfCakes: 20,
};
// action object
function PlaceOrder() {
  return {
    type: "Order a cake",
    quantity: 3,
  };
}

//restock order
function ReStock() {
  return {
    type: "Restock",
    quantity: 10,
  };
}

//reducer should always return a new state object
//reducer is function that takes in state and action to be performed
//description on this order is in action
const reducer = (state = initialState, action) => {
  if (action.type === "Order a cake") {
    return {
      numberOfCakes: state.numberOfCakes - action.quantity,
    };
  }

  if (action.type === "Restock") {
    return {
      numberOfCakes: state.numberOfCakes + action.quantity,
    };
  }

  return state;
};

//set up store using redux
//import import from 'redux'

//creat a store and pass the reducer
const store = redux.createStore(reducer); //deprecated
//const store = createStore(reducer); //reducer is connected to the store
console.log("Initial state", store.getState());

//place order //dispatch function will call reducer -> pass action -> placeOrder will come in action
store.dispatch(PlaceOrder())
store.dispatch(PlaceOrder());
store.dispatch(PlaceOrder());
store.dispatch(PlaceOrder());
console.log("State", store.getState());

store.dispatch(ReStock());
console.log("State after restock: ", store.getState());

//how to acces quantity 
