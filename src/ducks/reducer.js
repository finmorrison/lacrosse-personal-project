const initialState = {
  user: {},
  item: [],
  cart: [],
  total: 0
};

const UPDATE_USER = "UPDATE_USER";
const UPDATE_ITEM = "UPDATE_ITEMS";
const ADD_TO_CART = 'ADD_TO_CART'
const GET_USER='GET_USER'
const REMOVE_FROM_CART='REMOVE_FROM_CART'
// const CHECKOUT = 'CHECKOUT'

export function updateUser(input) {
  return {
    type: UPDATE_USER,
    payload: input
  };
}

export function getUser(userInfo){
  return{
    type: GET_USER,
    payload: userInfo
  }
}

export function updateItem(input) {
  return {
    type: UPDATE_ITEM,
    payload: input
  };
}

export function addToCart(input){
  return{
    type: ADD_TO_CART,
    payload: input
  }
}

export function removeFromCart(input){
  return{
    type: REMOVE_FROM_CART,
    payload: input
  }
}



export default function reducer(state = initialState, action) {
  switch (action.type) {
    //login
    case UPDATE_USER: {
      return { ...state, user: action.payload };
    }
    //
    case UPDATE_ITEM: {
      return { ...state, item: action.payload };
    }
    case GET_USER: {
      return {...state, user: action.payload}
    }
    case ADD_TO_CART: {
      return {...state, cart: action.payload}
    }
    case REMOVE_FROM_CART: {
      return {...state, cart: action.payload}
    }
    default: {
      return state;
    }
  }
}
