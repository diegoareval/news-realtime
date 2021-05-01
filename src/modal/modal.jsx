import React from "react";
import "./modal.css";

const Modal = ({ data, show, onHide }) => {
  console.log(data);
  return (
    <React.Fragment>
      {show && (
        <div className="modal">
          <div className="blog-card">
            <div className="meta">
              <div
                className="photo"
                style={{
                  backgroundImage: `url(${
                    data.urlToImage
                      ? data.urlToImage
                      : "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"
                  })`,
                }}
              ></div>
              <ul className="details">
                <li className="author">
                  <a href={data.url}>{data.author}</a>
                </li>
                <li className="date">
                  {new Date(data.publishedAt).toDateString()}
                </li>
                <li className="tags">
                  <ul>
                    <li>
                      <a href="#1">
                        {data.source.name ? data.source.name : ""}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="description">
              <h1>{data.title}</h1>
              <h2>{data.title.substring(0, 20) + "..."}</h2>
              <p>{data.content}</p>
              <p className="read-more" onClick={onHide}>
                Salir
              </p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
