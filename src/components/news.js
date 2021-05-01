import React, { useState } from "react";
import Footer from "../layout/footer";
import Aside from "./aside";
import New from "./item";
import Modal from "../modal/modal";
import "./news.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const News = ({ news, handleChange, value, setStartDate, startDate }) => {
  const [show, setShow] = useState(false);
  const [selectedItem, selectItem] = useState(null);
  const handleClick = (item) => {
    console.log(item);
    setShow(true);
    selectItem(item);
  };

  const hide = () => {
    setShow(false);
    selectItem(null);
  };
  return (
    <>
      <header>
        <h3 className="site-title">RealTime News</h3>
        <ul>
          <li>
            <input
              type="text"
              className="input-news-search"
              value={value}
              onChange={(e) => handleChange(e.target.value)}
            />
          </li>
          <li>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </li>
        </ul>
      </header>
      <section>
        <article>
          <div className="article-wrapper">
            <div className="blog-label">
              <div className="home-label">News</div>
            </div>
            {news.map((item) => {
              return (
                <div onClick={() => handleClick(item)}>
                  <New item={item} />
                </div>
              );
            })}
          </div>
        </article>
        <Aside />
      </section>
      <Footer />
      <Modal show={show} onHide={() => hide()} data={selectedItem} />
    </>
  );
};

export default News;
