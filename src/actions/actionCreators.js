import {
  FETCH_TOPSALES_REQUEST,
  FETCH_TOPSALES_FAILURE,
  FETCH_TOPSALES_SUCCESS,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS
} from '../actions/actionTypes';

////Top-Sales
export const fetchTopSalesRequest =() => ({
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

export const fetchItems = (category) => async (dispatch) => {
  dispatch(fetchItemsRequest());

  try {
    const response = await fetch(category ? process.env.REACT_APP_API_ITEMS + category : process.env.REACT_APP_API_ITEMS, {
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