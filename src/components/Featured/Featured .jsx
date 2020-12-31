import { Favorite, Loop, ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import FlipMove from "react-flip-move";
import {} from "./Featured.scss";
import img1 from "../utili/images/cat-1.jpg";
import img2 from "../utili/images/cat-2.jpg";
import img3 from "../utili/images/cat-3.jpg";
import img4 from "../utili/images/cat-4.jpg";
import img5 from "../utili/images/cat-5.jpg";
import banner1 from "../utili/images/banner-1.webp";
import banner2 from "../utili/images/banner-2.webp";

const tabs = [
  { id: 0, text: "All" },
  { id: 1, text: "Oranges" },
  { id: 2, text: "Fresh Meat" },
  { id: 3, text: "Vegetables" },
  { id: 4, text: "Fastfood" },
];

const productsGrid = [
  {
    id: 0,
    name: "DEINK FRUITS",
    img: img1,
    type: ["All", "Oranges"],
    price: "$30",
  },
  {
    id: 1,
    name: "WINE FRUITS",
    img: img2,
    type: ["All", "Oranges", "Fresh Meat"],
    price: "$30",
  },
  {
    id: 2,
    name: "LOVELY FRUITS",
    img: img3,
    type: ["All", "Oranges", "Vegetables"],
    price: "$30",
  },
  {
    id: 3,
    name: "SEXY FRUITS",
    img: img4,
    type: ["All", "Oranges", "Vegetables"],
    price: "$30",
  },
  {
    id: 4,
    name: "WIND WNE",
    img: img5,
    type: ["All", "Fresh Meat"],
    price: "$30",
  },
  {
    id: 5,
    name: "BEARA AND WINE",
    img: img2,
    type: ["All", "Vegetables"],
    price: "$30",
  },
  {
    id: 6,
    name: "BEARA AND WINE",
    img: img4,
    type: ["All", "Oranges"],
    price: "$30",
  },
  {
    id: 7,
    name: "BEARA AND WINE",
    img: img5,
    type: ["All", "Vegetables", "Fastfood"],
    price: "$30",
  },
  {
    id: 8,
    name: "BEARA AND WINE",
    img: img2,
    type: ["All", "Fastfood"],
    price: "$30",
  },
  {
    id: 9,
    name: "BEARA AND WINE",
    img: img3,
    type: ["All", "Fresh Meat"],
    price: "$30",
  },
];
const Featured = () => {
  const [selectTab, setSelectTab] = useState({ id: 0, type: "All" });
  const handleClickTab = (id, type) => {
    setSelectTab({ id, type });
  };
  return (
    <div className="featured">
      <h1>Featured Product</h1>
      <div className="tabs">
        {tabs.map((tab) => (
          <h4
            key={tab.id}
            className={`${tab.id === selectTab.id && "active-tab"}`}
            onClick={(e) => handleClickTab(tab.id, tab.text)}
          >
            {tab.text}
          </h4>
        ))}
      </div>
      <FlipMove className="grid-product">
        {productsGrid
          .filter((e) => e.type.includes(selectTab.type))
          .map((prod, ind) => (
            <div key={ind} className="product">
              <div className="img">
                <img src={prod.img} alt={prod.name} />
                <div className="add-to-cart">
                  <Favorite />
                  <Loop />
                  <ShoppingCart />
                </div>
              </div>
              <div className="info">
                <h4>{prod.name}</h4>
                <h5>{prod.price}</h5>
              </div>
            </div>
          ))}
      </FlipMove>
      <div className="banner">
        <img src={banner1} alt="banner1" />
        <img src={banner2} alt="banner2" />
      </div>
    </div>
  );
};

export default Featured;
