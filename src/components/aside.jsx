import React from "react";

const Aside = () => {
  return (
    <aside>
      <div className="aside-about">
        <div className="home-label aside-label">
          <h4 className="home-label-title">ABOUT</h4>
        </div>
        <div className="aside-content-home">
          This is an demo webapp to fetch news real time.
        </div>
      </div>
      <div className="aside-work">
        <div className="home-label aside-label">
          <h4 className="home-label-title">WORK</h4>
        </div>
        <div className="aside-content-home">
          This is a fascinating practical, i hope you like it
        </div>
      </div>
    </aside>
  );
};

export default Aside;
