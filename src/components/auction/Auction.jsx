import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from './auction.json';
import inc from '../../assets/icons/plus.svg';
import dec from '../../assets/icons/minus.svg';
import heart from '../../assets/icons/heart.svg';
import bestsellers from '../../assets/images/bestsellers.png';

const Auction = () => {
  const PrevArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M18.8125 24.9L10.6625 16.75C9.7 15.7875 9.7 14.2125 10.6625 13.25L18.8125 5.10001"
        stroke="#171717"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const NextArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M11.1875 5.09999L19.3375 13.25C20.3 14.2125 20.3 15.7875 19.3375 16.75L11.1875 24.9"
        stroke="#171717"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <PrevArrowIcon />
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <NextArrowIcon />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="auction">
      <div className="container">
        <div className="inner">
          <div className="title">
            <h2>Аукционные товары</h2>
            <p>перейти в каталог</p>
          </div>
          <Slider {...settings}>
            {data.map((card) => (
              <div className="card" key={card.id}>
                <div className="img">
                  <div className="favorite">
                    <img src={heart} alt="heart" />
                  </div>
                  <img src={bestsellers} alt="product" />
                </div>
                <h3>{card.name}</h3>
                <div className="prices">
                  <p className="price">{card.price} c</p>
                  <p className="old-price">{card.old_price} c</p>
                </div>
                <span className="status">{card.status ? 'В наличии' : 'Нет в наличии'}</span>
                <div className="set">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none">
                    <circle cx="2.90193" cy="3.00002" r="2.90193" fill="#3286C2" />
                  </svg>
                  <span>Комплект</span>
                </div>
                <div className="counter">
                  <div className="dec">
                    <img src={dec} alt="decrement" />
                  </div>
                  <span>999</span>
                  <div className="inc">
                    <img src={inc} alt="increment" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Auction;
