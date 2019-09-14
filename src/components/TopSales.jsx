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
  }, [dispatch])
  
  return (
    <Fragment>
      {loading && <Preloader />}
      {error && <Error fetchFunc={fetchTopSales()} />}
      {(items.length > 0) && (
        <div className="row">
          {items.map(o => (
            <div className="col-4" key={o.id}>
              <div className="card">
                <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title}/>
                <div className="card-body">
                  <p className="card-text">{o.title}</p>
                  <p className="card-text">{o.price} руб.</p>
                  <Link to={`/products/${o.id}.html`} className="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  )
}

