import React, {useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCartItems} from '../actions/actionCreators';

export default function Cart() {
  const {cartItems, totalSum} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleRemove = (name) => {
    localStorage.removeItem(name);
    dispatch(getCartItems());
  }
  return (
    <Fragment>
      <section className="cart">
          <h2 className="text-center">Корзина</h2>
          <table className="table table-bordered">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Название</th>
                      <th scope="col">Размер</th>
                      <th scope="col">Кол-во</th>
                      <th scope="col">Стоимость</th>
                      <th scope="col">Итого</th>
                      <th scope="col">Действия</th>
                  </tr>
              </thead>
              <tbody>
                {cartItems && cartItems.map((o, index) => (
                  <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td><Link to={o.link}>{o.title}</Link></td>
                      <td>{o.size}</td>
                      <td>{o.quantity}</td>
                      <td>{`${o.price} руб.`}</td>
                      <td>{`${o.price * o.quantity} руб.`}</td>
                      <td><button className="btn btn-outline-danger btn-sm" onClick={() => { handleRemove(o.name)}}>Удалить</button></td>
                  </tr>
                ))}
                
                  <tr>
                      <td colSpan="5" className="text-right">Общая стоимость</td>
                      {totalSum && <td>{`${totalSum} руб.`}</td>}
                  </tr>
              </tbody>
          </table>
      </section>
      <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{maxWidth: "30rem", margin: "0 auto"}}>
              <form className="card-body">
                  <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input className="form-control" id="phone" placeholder="Ваш телефон"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="address">Адрес доставки</label>
                      <input className="form-control" id="address" placeholder="Адрес доставки"/>
                  </div>
                  <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="agreement"/>
                      <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                  </div>
                  <button type="submit" className="btn btn-outline-secondary">Оформить</button>
              </form>

          </div>
      </section>
    </Fragment>
  )

}