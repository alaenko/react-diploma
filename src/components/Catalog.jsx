
import React, { useEffect, Fragment } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchItems, fetchCategories, fetchMore, changeSearchField} from '../actions/actionCreators';
import Preloader from './Preloader';
import Error from './Error';
import Search from './Search';

export default function Catalog({location, history}) {
  const {items, categories, loadingItems, loadingCategories, errorItems, errorCategories, errorMore, more} = useSelector(state => state.catalog);
  const {searchString} = useSelector(state => state.search);

  const dispatch = useDispatch();
  const offset = items.length;
  const params = new URLSearchParams(location.search);
  const setUrl = () => history.replace(`${location.pathname}?${params.toString()}`)

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems(params));
  }, [dispatch]);

  const handleClick = (evt, id) => {
    evt.preventDefault()
    if (evt.target.classList.contains('active')) return;
    if (evt.target.text === 'Все') {
      params.delete('categoryId');
    } else {
      params.set('categoryId', id);
    }
    params.delete('offset');
    setUrl();
    dispatch(fetchItems(params))
  }

  const handleMore = () => {
    params.set('offset', offset)
    setUrl();
    dispatch(fetchMore(params));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    params.set('q', searchString);
    setUrl();
    dispatch(fetchItems(params));
  }

  const handleChange = (evt) => {
    dispatch(changeSearchField(evt.target.value));
  }

  if (loadingCategories) return <Preloader />

  if (errorCategories) return <Error func={dispatch(fetchCategories())}/>
  return (
    <Fragment>
    {(location.pathname === '/catalog') && <Search handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} className="catalog-search-form form-inline"/>}
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <NavLink to='#' isActive={() => !params.has('categoryId')} onClick={(evt) => handleClick(evt)} className="nav-link" activeClassName="active">Все</NavLink>
       </li>
        {categories.map(o => (
          <li className="nav-item" key={o.id}>
            <NavLink to='#' isActive={() => params.get('categoryId') == o.id} onClick={(evt) => handleClick(evt, o.id)} className="nav-link" activeClassName="active" >{o.title}</NavLink>

          </li>
        ))}
      </ul>
      {errorItems && <Error func={dispatch(fetchItems(params))}/>}
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

