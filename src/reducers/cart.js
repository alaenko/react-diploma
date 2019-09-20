import {
  SET_CART_TOTAL,
  GET_CART_ITEMS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  cartItems: null,
  totalSum: null
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case GET_CART_ITEMS_SUCCESS:
      const {cartItems} = action.payload;
      return {
        ...state,
        cartItems
      };
    case SET_CART_TOTAL:
        const {total} = action.payload;
      return {
        ...state,
        totalSum: total
      };
    default:
      return state;
  }
}