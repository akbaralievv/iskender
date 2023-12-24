import React from 'react';

import categories from '../../assets/images/categories.png';

function Categories() {
  const cards = [...new Array(14)].map((_, index) => {
    return (
      <div className="card" key={index}>
        <div className="title">
          <p>Ванны</p>
          <span>3000 товаров</span>
        </div>
        <div className="img">
          <img src={categories} alt="categories" />
        </div>
      </div>
    );
  });
  return (
    <section className="categories">
      <div className="container">
        <div className="inner">
          <h2>Категории</h2>
          <div className="cards">{cards}</div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
