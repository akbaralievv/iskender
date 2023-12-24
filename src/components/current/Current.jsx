import React from 'react';

import current from '../../assets/images/current.png';

function Current() {
  const cards = [...new Array(5)].map((_, index) => {
    return (
      <div className="card" key={index}>
        <img src={current} alt="current" />
        <p>Скидки</p>
      </div>
    );
  });
  const cardSkeletons = [...new Array(9)].map((_, index) => {
    return (
      <div className="card_skeleton" key={index}>
        <div></div>
        <p></p>
      </div>
    );
  });
  return (
    <div className="current">
      <div className="container">
        <div className="inner">
          {cards}
          {cardSkeletons}
        </div>
      </div>
    </div>
  );
}

export default Current;
