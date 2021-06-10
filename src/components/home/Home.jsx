import React from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.scss";
import img1 from "../utili/images/cat-1.jpg";
import img2 from "../utili/images/cat-2.jpg";
import img3 from "../utili/images/cat-3.jpg";
import img4 from "../utili/images/cat-4.jpg";
import img5 from "../utili/images/cat-5.jpg";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

SwiperCore.use([Autoplay, Navigation]);

const productsSlide = [
  { id: 0, name: "DEINK FRUITS", img: img1 },
  { id: 1, name: "WINE FRUITS", img: img2 },
  { id: 2, name: "LOVELY FRUITS", img: img3 },
  { id: 3, name: "SEXY FRUITS", img: img4 },
  { id: 4, name: "WIND WNE", img: img5 },
  { id: 5, name: "BEARA AND WINE", img: img2 },
  { id: 6, name: "BEARA AND WINE", img: img4 },
  { id: 7, name: "BEARA AND WINE", img: img5 },
  { id: 8, name: "BEARA AND WINE", img: img2 },
  { id: 9, name: "BEARA AND WINE", img: img3 },
];

const Home = () => {
  return (
    <div className="home">
      <div className={`image`}>
        <div className="info">
          <h1>
            Vegetable <br /> 100% Organic
          </h1>
          <span>Free Pickup and Delivery Available</span>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="swiper-products">
        <Swiper
          className="swiper-container"
          slidesPerView={1}
          spaceBetween={0}
          loop
          Navigation
          breakpoints={{
            650: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          autoplay={{
            delay: 1500,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {productsSlide.map((prod, ind) => (
            <SwiperSlide key={ind} className="swiper-slide">
              <img src={prod.img} alt={prod.name} />
              <button>{prod.name}</button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-btn-navigation">
          <ArrowLeft className="swiper-button-next" />
          <ArrowRight className="swiper-button-prev" />
        </div>
      </div>
    </div>
  );
};

export default Home;
