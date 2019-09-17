import {
  FETCH_TOPSALES_REQUEST,
  FETCH_TOPSALES_FAILURE,
  FETCH_TOPSALES_SUCCESS,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_FAILURE,
  FETCH_ITEM_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_MORE_REQUEST,
  FETCH_MORE_FAILURE,
  FETCH_MORE_SUCCESS,
  CHANGE_SEARCH_FIELD,
  IS_SEARCHING,
  SET_AVALIBLE_SIZES,
  SET_QUANTITY,
  SET_SIZE
} from '../actions/actionTypes';


////Top-Sales
export const fetchTopSalesRequest = () => ({
  type: FETCH_TOPSALES_REQUEST,
});

export const fetchTopSalesFailure = error => ({
  type: FETCH_TOPSALES_FAILURE,
  payload: {
    error,
  },
});

export const fetchTopSalesSuccess = items => ({
  type: FETCH_TOPSALES_SUCCESS,
  payload: {
    items,
  },
});

export const fetchTopSales = () => async (dispatch) => {
  dispatch(fetchTopSalesRequest());

  try {
    const response = await fetch(process.env.REACT_APP_API_TOPSALES, {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    
    dispatch(fetchTopSalesSuccess(data));
  } catch (error) {
    dispatch(fetchTopSalesFailure(error.message));
  }
};

////Catalog
export const fetchItemsRequest =() => ({
  type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsFailure = errorItems => ({
  type: FETCH_ITEMS_FAILURE,
  payload: {
    errorItems,
  },
});

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: {
    items,
  },
});

export const fetchItems = search => async (dispatch) => {
  dispatch(fetchItemsRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_ITEMS}?${search}`, {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    
    dispatch(fetchItemsSuccess(data));
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
  }
};

////Catalog Categories
export const fetchCategoriesRequest =() => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesFailure = errorCategories => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: {
    errorCategories,
  },
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
});

export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());

  try {
    const response = await fetch(process.env.REACT_APP_API_CATEGORIES, {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    
    dispatch(fetchCategoriesSuccess(data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};

////Catalog more items
export const fetchMoreRequest =() => ({
  type: FETCH_MORE_REQUEST,
});

export const fetchMoreFailure = errorMore => ({
  type: FETCH_MORE_FAILURE,
  payload: {
    errorMore,
  },
});

export const fetchMoreSuccess = moreItems => ({
  type: FETCH_MORE_SUCCESS,
  payload: {
    moreItems,
  },
});

export const fetchMore = search => async (dispatch) => {
  dispatch(fetchMoreRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_ITEMS}?${search}`, {

    mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    const data = await response.json();
    dispatch(fetchMoreSuccess(data));
  } catch (error) {
    dispatch(fetchMoreFailure(error.message));
  }
};

////Search
export const changeSearchField = searchString => ({
  type: CHANGE_SEARCH_FIELD,
  payload: {
    searchString,
  },
});

export const setSearching =() => ({
  type: IS_SEARCHING,
});

////Catalog item
export const fetchItemRequest =() => ({
  type: FETCH_ITEM_REQUEST,
});

export const fetchItemFailure = error => ({
  type: FETCH_ITEM_FAILURE,
  payload: {
    error,
  },
});

export const fetchItemSuccess = item => ({
  type: FETCH_ITEM_SUCCESS,
  payload: {
    item,
  },
});

export const setAvalibleSizes = sizes => ({
  type: SET_AVALIBLE_SIZES,
  payload: {
    sizes,
  },
});

export const setQuantity = quantity => ({
  type: SET_QUANTITY,
  payload: {
    quantity,
  },
});

export const setSize = size => ({
  type: SET_SIZE,
  payload: {
    size,
  },
});

export const fetchItem = (id) => async (dispatch) => {
  dispatch(fetchItemRequest());
  
  try {
    const response = await fetch(`${process.env.REACT_APP_API_ITEMS}/${id}`, {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    const filteredSizes = data.sizes.filter(o => o.avalible);
    dispatch(setAvalibleSizes(filteredSizes));
    dispatch(fetchItemSuccess(data));
  } catch (error) {
    dispatch(fetchItemFailure(error.message));
  }
};