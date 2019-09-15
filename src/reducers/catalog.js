import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_MORE_REQUEST,
  FETCH_MORE_FAILURE,
  FETCH_MORE_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  items: [],
  categories: [],
  loadingItems: false,
  loadingCategories: false,
  errorItems: null,
  errorCategories: null,
  errorMore: null,
  more: true
  
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        items: [],
        loadingItems: true,
      };
    case FETCH_ITEMS_FAILURE:
      const {errorItems} = action.payload;
      return {
        ...state,
        loadingItems: false,
        errorItems,
      };
    case FETCH_ITEMS_SUCCESS:
      const {items} = action.payload;
      return {
        ...state,
        items,
        loadingItems: false,
        errorItems: null,
        more: true
      };
      case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loadingCategories: true,
        errorCategories: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      const {errorCategories} = action.payload;
      return {
        ...state,
        loadingCategories: false,
        errorCategories,
      };
    case FETCH_CATEGORIES_SUCCESS:
      const {categories} = action.payload;
      return {
        ...state,
        categories,
        loadingCategories: false,
        errorCategories: null,
      };
      case FETCH_MORE_REQUEST:
        return {
          ...state,
          loadingItems: true,
          errorMore: null,
          more: false,
        };
      case FETCH_MORE_FAILURE:
        return {
          ...state,
          errorMore: true,
          loadingItems: false,
          more: false
        };
      case FETCH_MORE_SUCCESS:
        const {moreItems} = action.payload;
        moreItems.forEach(o => state.items.push(o))
        return {
          ...state,
          loadingItems: false,
          errorMore: null,
          more: moreItems.length < 6 ? false : true
        };
    default:
      return state;
  }
}