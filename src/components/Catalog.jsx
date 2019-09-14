import React, { useEffect, Fragment } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchItems, fetchCategories} from '../actions/actionCreators';
import Preloader from './Preloader';
import Error from './Error';

export default function Catalog() {
  const {items, categories, loadingItems, loadingCategories, errorItems, errorCategories} = useSelector(state => state.catalog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems());
  }, [dispatch]);

  const handleClick = (evt, id) => {
    if (evt.target.classList.contains('active')) return;
    dispatch(fetchItems(id ? `?categoryId=${id}` : null))
  }
  
  if (loadingCategories) return <Preloader />

  if (errorCategories) return <Error fetchFunc={fetchCategories()}/>

  return (
    <Fragment>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <NavLink exact isActive={(match, location) => location.pathname + location.search === '/'} to='/' onClick={(evt) => handleClick(evt)} className="nav-link" activeClassName="active">Все</NavLink>
       </li>
        {categories.map(o => (
          <li className="nav-item" key={o.id}>
            <NavLink exact isActive={(match, location) => location.pathname + location.search === `/?categoryId=${o.id}`} to={`/?categoryId=${o.id}`} onClick={(evt) => handleClick(evt, o.id)} className="nav-link" activeClassName="active" >{o.title}</NavLink>

          </li>
        ))}
      </ul>
      {errorItems && <Error fetchFunc={fetchItems()}/>}
      {loadingItems && <Preloader />}
      <div className="catalog-categories nav justify-content-center">
        {items.map(o => (
          <div className="col-4" key={o.id}>
            <div className="card catalog-item-card">
              <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title}/>
              <div className="card-body">
                <p className="card-text">{o.title}</p>
                <p className="card-text">{o.price} руб.</p>
                <Link to={`/products/${o.id}.html`} className="btn btn-outline-primary">Заказать</Link>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="btn btn-outline-primary">Загрузить ещё</button>
        </div>
      </div>
    </Fragment>
  )
}

