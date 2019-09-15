import React, { useEffect, Fragment } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchItems, fetchCategories, fetchMore} from '../actions/actionCreators';
import Preloader from './Preloader';
import Error from './Error';

export default function Catalog(props) {
  const {items, categories, loadingItems, loadingCategories, errorItems, errorCategories, errorMore, more} = useSelector(state => state.catalog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems());
  }, [dispatch]);

  const handleClick = (evt, id) => {
    if (evt.target.classList.contains('active')) return;
    dispatch(fetchItems(id ? `?categoryId=${id}` : null))
  }
  
  const handleMore = () => {
    const offset = items.length; 
    const params = new URLSearchParams(document.location.search);
    const categoryId = params.get('categoryId');
    dispatch(fetchMore(offset, categoryId));
  }
  if (loadingCategories) return <Preloader />

  if (errorCategories) return <Error func={dispatch(fetchCategories())}/>

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
      {errorItems && <Error func={dispatch(fetchItems())}/>}
      <div className="row">
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
      </div>
      {loadingItems && <Preloader />}
        {errorMore && <Error func={handleMore}/>}
        {(!loadingItems && more) && (
          <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleMore}>Загрузить ещё</button>
          </div>
        )}
    </Fragment>
  )
}

