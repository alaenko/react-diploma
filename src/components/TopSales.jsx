import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTopSales} from '../actions/actionCreators';
import Preloader from './Preloader';
import Error from './Error';

export default function TopSales() {
  const {items, loading, error} = useSelector(state => state.topSales);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTopSales())
  }, [])
  
  return (
    <Fragment>
      {loading && <Preloader />}
      {error && <Error callback={dispatch(fetchTopSales())} />}
      {(items.length > 0) && (
        <div className="row">
          {items.map(item => (
            <div className="col-4" key={item.id}>
              <div className="card">
                <img src={item.images[0]} className="card-img-top img-fluid" alt={item.title}/>
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">{item.price} руб.</p>
                  <Link to={`/products/${item.id}.html`} className="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  )
}

