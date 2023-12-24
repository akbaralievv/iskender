import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import address from '../../assets/images/address.png';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import location from '../../assets/icons/location (1).svg';
import arrow from '../../assets/icons/arrow-up.svg';

const Addresses = () => {
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
  const cards = [...new Array(12)].map((_, index) => (
    <div className="card" key={index}>
      <div className="content">
        <div className="name">
          <div className="name_title">
            <img src={address} alt="address" />
            <div className="text">
              <p>Iskender home</p>
              <p>открыть в карте</p>
            </div>
          </div>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="location">
          <img src={location} alt="location" />
          <p className="location_title">Кыргызстан, г. Бишкек ул. Турусбекова A167</p>
        </div>
        <div className="address_footer">
          <div className="time">
            <img src={clock} alt="clock" />
            <p className="time_title">08:00 - 22:00</p>
          </div>
          <div className="phone">
            <img src={phone} alt="phone" />
            <p className="phone_title">+996 500 345 345</p>
          </div>
        </div>
      </div>
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="addresses">
      <div className="container">
        <div className="inner">
          <div className="title">
            <h2>Адреса магазинов</h2>
            <p>все</p>
          </div>
          <Slider {...settings}>{cards}</Slider>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
