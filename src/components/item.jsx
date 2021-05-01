import React from "react";

const New = ({item}) => {
  return (
    <div className="blog-list-home">
      <div className="blog-thumbnail">
        <div className="thumbnail-frame">
          <img
            className="thumbnail-frame"
            src={item.urlToImage}
            alt={item.title}
          />
        </div>
      </div>
      <div className="blog-list-content">
        <h4>{item.title}</h4>
        {item.description}
      </div>
    </div>
  );
};

export default New;
