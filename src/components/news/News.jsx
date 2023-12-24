import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import illustration from '../../assets/images/illustration.png';

const News = () => {
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
  const cards = [...new Array(2)].map((_, index) => (
    <div className="card" key={index}>
      <div className="circle"></div>
      <div className="circle last"></div>
      <div className="content">
        <div className="text">
          <div className="title">
            <span>-50%</span>
            <p>На кухонную мебель </p>
          </div>
          <button>Подробнее</button>
        </div>
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  ));
  const cardsSkeleton = [...new Array(4)].map((_, index) => (
    <div className="cardsSkeleton" key={index}></div>
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
    <div className="news">
      <div className="container">
        <div className="inner">
          <div className="title">
            <h2>Новости</h2>
            <p className="title_inner">все</p>
          </div>
          <Slider {...settings}>
            {cards}
            {cardsSkeleton}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default News;
