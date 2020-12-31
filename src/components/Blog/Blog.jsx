import { CalendarToday, Sms } from "@material-ui/icons";
import React from "react";
import "./Blog.scss";
import img1 from "../utili/images/blog-1.webp";
import img2 from "../utili/images/blog-2.webp";
import img3 from "../utili/images/blog-3.webp";

const blogs = [
  {
    id: 0,
    img: img1,
    title: "Cooking tips make cooking simple",
    desc:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
  },
  {
    id: 1,
    img: img2,
    title: "6 ways to prepare breakfast for 30",
    desc:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
  },
  {
    id: 0,
    img: img3,
    title: "Visit the clean farm in the US",
    desc:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
  },
];
const Blog = () => {
  return (
    <div className="blogs">
      <h1>From The Blog</h1>
      <div className="blog-section">
        {blogs.map((blog) => (
          <div className="blog">
            <img src={blog.img} alt={blog.title} />
            <div className="time-comments">
              <CalendarToday />
              <span>May 4,2020</span>
              <Sms />
              <span>5</span>
            </div>
            <div className="info">
              <h2>{blog.title}</h2>
              <p>{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
