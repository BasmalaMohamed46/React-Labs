import {
    GET_USERS,
    GET_USER,
    DELETE_USER,
    ADD_USER,
    UPDATE_USER,
    ADD_CART,
  } from "../Actions/UsersAction.js";
  
  const INITIAL_STATE = {
    list: [],
    User: null,
    cartItemsNumber: 0,
  };
  
  export default function UsersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          list: action.payload,
        };
      case GET_USER:
        return {
          ...state,
          User: action.payload,
        };
      case DELETE_USER:
        return {
          ...state,
          list: state.list.filter((User) => User.id !== action.payload),
        };
      case ADD_USER:
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      case UPDATE_USER:
        return {
          ...state,
          list: state.list.map((User) =>
            User.id === action.payload.id ? action.payload : User
          ),
        };
        case ADD_CART:
            return {
                ...state,
                cartItemsNumber: state.cartItemsNumber + 1,
            };

      default:
        return state;
    }
  }
  