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



// Redux
// help us manage state managment system
// when it's too much passing states between components
// props driliing (passing props to children to children to children)
// so we came up with the idea oc CONTEXT-place to store all the states
// any level componenet could directly use from context, that helped us with hardcode
// another way of this is Redux-new library which helps us to manage the states in application

// local variable starts with underscore _
const _CONSTANTS = {
    ORDER_CAKE: "Order a cake",
    RESTOCK_CAKES: "Restock",
    ORDER_ICECREAM: "Order Ice Cream"
}

// inital state 
const initialState = {
  numberOfCakes: 20,
  numberOfIceCreams: 30
};

// action object
function PlaceOrder() {
  return {
    type: _CONSTANTS.ORDER_CAKE,
    quantity: 3,
  };
}

//restock order
function ReStock() {
  return {
    type: _CONSTANTS.RESTOCK_CAKES,
    quantity: 10,
  };
}

//reducer should always return a new state object
//reducer is function that takes in state and action to be performed
//description on this order is in action
//reducer should not have changing logic..(immutability), definite logic for definite action type
const reducer = (state = initialState, action) => {
  if (action.type === _CONSTANTS.ORDER_CAKE) {
    return {
      ...state, //Immutable -first you copy your state as it is …state, then make a change in required field, returns new copy of your state obj
      numberOfCakes: state.numberOfCakes - action.quantity, // - 3,  number of cakes is a state, so we are changeing our state
    };
  }

  if (action.type === _CONSTANTS.RESTOCK_CAKES) {
    return {
      numberOfCakes: state.numberOfCakes + action.quantity, // + 10
    };
  }

  // ice cream
//    if (action.type === _CONSTANTS.ORDER_ICECREAM) {
//      return {
//        numberOfCakes: state.numberOfCakes - action.quantity, // -3
//      };
//    }

  return state; // if your action type does't match, you should return your state as it is, by default/if don't return then it would be undefined, use CONSTENTS
};

//set up store using redux
//import import from 'redux'

//creat a store and pass the reducer
const store = redux.createStore(reducer); //(deprecated) after ...state, store will have new copy of your states including original inital states will remain same
//const store = createStore(reducer); //reducer is connected to the store
console.log("Initial state for cake and iceCream is ..", store.getState()); //checking state, initialy I have 20 cakes

//place order //dispatch function will call reducer -> pass action -> placeOrder will come in action
// when we order a cake we send some quantity (we sending 3 quantity to action)
store.dispatch(PlaceOrder())
store.dispatch(PlaceOrder());
store.dispatch(PlaceOrder());
store.dispatch(PlaceOrder());
console.log("State", store.getState());

// when we restock we sending 10 quantity (add 10)
store.dispatch(ReStock());
console.log("State after restock: ", store.getState());

//how to acces quantity 
