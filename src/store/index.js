import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import topSalesReducer from '../reducers/topSales';
import catalogReducer from '../reducers/catalog';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  topSales: topSalesReducer,
  catalog: catalogReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)),
);

export default store;