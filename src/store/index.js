import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import topSalesReducer from '../reducers/topSales';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  topSales: topSalesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)),
);

export default store;