import {
  FETCH_TOPSALES_REQUEST,
  FETCH_TOPSALES_FAILURE,
  FETCH_TOPSALES_SUCCESS,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_MORE_REQUEST,
  FETCH_MORE_FAILURE,
  FETCH_MORE_SUCCESS
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

export const fetchMore = (offset, categoryId) => async (dispatch) => {
  dispatch(fetchMoreRequest());

  try {
    const response = await fetch(categoryId ? `${process.env.REACT_APP_API_ITEMS}?offset=${offset}&categoryId=${categoryId}` : `${process.env.REACT_APP_API_ITEMS}?offset=${offset}`, {
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