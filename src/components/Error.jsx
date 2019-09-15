import React from 'react';
import PropTypes from 'prop-types';

export default function Error({func}) {

  const handleUpdate = () => func();
  
  return (
    <div className="text-center">
      <p>Произошла ошибка!</p>
      <button className="btn btn-outline-primary" onClick={handleUpdate}>Обновить</button>
    </div>
  )
}

Error.propTypes = {
  func: PropTypes.func.isRequired
}

