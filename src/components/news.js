import React from "react";
import Footer from "../layout/footer";
import Aside from "./aside";
import New from "./item"
import "./news.css";
const News = ({ news, handleChange, value }) => {
  return (
    <>
      <header>
        <h3 className="site-title">RealTime News</h3>
        <ul>
          <li>
          <input type="text" className="input-news-search" value={value} onChange={(e) => handleChange(e.target.value)}/>
          </li>
        </ul>
      </header>
      <section>
        <article>
          <div className="article-wrapper">
            <div className="blog-label">
              <div className="home-label">
                   News 
              </div>
            </div>
             {
                 news.map((item) => {
                 return (
                   <New item={item}/>
                 )

                 })
             }


          </div>
        </article>
        <Aside />
      </section>
      <Footer />
    </>
  );
};

export default News;
