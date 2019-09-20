import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import topSalesReducer from '../reducers/topSales';
import catalogReducer from '../reducers/catalog';
import searchReducer from '../reducers/search';
import catalogItemReducer from '../reducers/catalogItem';
import cartReducer from '../reducers/cart';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  topSales: topSalesReducer,
  catalog: catalogReducer,
  search: searchReducer,
  catalogItem: catalogItemReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)),
);

export default store;