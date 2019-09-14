import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

export default function Error({fetchFunc}) {
  
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(fetchFunc)
  }
  return (
    <div className="text-center">
      <p>Произошла ошибка!</p>
      <button className="btn btn-outline-primary" onClick={handleUpdate}>Обновить</button>
    </div>
  )
}

Error.propTypes = {
  fetchFunc: PropTypes.func.isRequired
}

