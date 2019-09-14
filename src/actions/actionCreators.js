import {
  FETCH_TOPSALES_REQUEST,
  FETCH_TOPSALES_FAILURE,
  FETCH_TOPSALES_SUCCESS
} from '../actions/actionTypes';

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
    const response = await fetch(`${process.env.REACT_APP_API_TOPSALES}`, {
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