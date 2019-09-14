import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTopSales} from '../actions/actionCreators';
import Preloader from './Preloader';

export default function TopSales() {
  const {items, loading, error} = useSelector(state => state.topSales);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopSales())
  }, [dispatch])
  
  const handleUpdate = () => {
    dispatch(fetchTopSales())
  }

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading && <Preloader />}
      {error && (
        <div className="text-center">
        <p>Произошла ошибка!</p>
        <button className="btn btn-outline-primary" onClick={handleUpdate}>Обновить</button>
      </div>
      )}
      <div className="row">
        {(items.length > 0) && items.map(o => (
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
    </section>
  )
}

