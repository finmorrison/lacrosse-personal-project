const initialState = {
  user: {},
  item: {}
};

const UPDATE_USER = "UPDATE_USER";
const UPDATE_ITEM = "UPDATE_ITEMS";

export function updateUser(input) {
  return {
    type: UPDATE_USER,
    payload: input
  };
}

export function updateItem(input) {
  return {
    type: UPDATE_ITEM,
    payload: input
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER: {
      return { ...state, user: action.payload };
    }
    case UPDATE_ITEM: {
      return { ...state, item: action.payload };
    }
    default: {
      return state;
    }
  }
}
