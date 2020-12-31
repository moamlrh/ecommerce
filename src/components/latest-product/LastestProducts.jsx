import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "./LastestProducts.scss";
import img1 from "../utili/images/cat-1.jpg";
import img2 from "../utili/images/cat-2.jpg";
import img3 from "../utili/images/cat-3.jpg";
import img4 from "../utili/images/cat-4.jpg";
import img5 from "../utili/images/cat-5.jpg";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
SwiperCore.use([Autoplay, Navigation]);

const products = [
  {
    id: 0,
    title: "Latest Products",
    col: "first",
    imgs: [
      { src: img1, title: "Crab Pool Seacurity", price: "$30.00" },
      { src: img2, title: "Crab Pool Seacurity", price: "$20.00" },
      { src: img3, title: "Crab Pool Seacurity", price: "$34.00" },
    ],
  },
  {
    id: 1,
    title: "Top Rated Products",
    col: "second",
    imgs: [
      { src: img5, title: "Crab Pool Seacurity", price: "$30.00" },
      { src: img4, title: "Crab Pool Seacurity", price: "$20.00" },
      { src: img3, title: "Crab Pool Seacurity", price: "$34.00" },
    ],
  },
  {
    id: 2,
    title: "Review Products",
    col: "third",
    imgs: [
      { src: img2, title: "Crab Pool Seacurity", price: "$30.00" },
      { src: img3, title: "Crab Pool Seacurity", price: "$20.00" },
      { src: img1, title: "Crab Pool Seacurity", price: "$34.00" },
    ],
  },
];

const LastestProducts = () => {
  return (
    <div className="lastest-products">
      {products.map((product) => (
        <div className={`cols ` + product.col} key={product.id}>
          <div className="header">
            <h2>{product.title}</h2>
            <div className="swiper-btn-navigation">
              <ArrowLeft className="swiper-button-next" />
              <ArrowRight className="swiper-button-prev" />
            </div>
          </div>
          <Swiper
            className="swiper-container"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
            autoplay={{ delay: 1500 }}
          >
            <SwiperSlide className="swiper-slide">
              {product.imgs.map((img) => (
                <div className="img-container">
                  <img src={img.src} alt={img.title} />
                  <div className="info">
                    <h3>{img.title}</h3>
                    <span>{img.price}</span>
                  </div>
                </div>
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default LastestProducts;
