import React from "react";

import "./menu-item.scss";

export default ({ title, imageUrl, size }) => (
  <div className={`${size !== undefined ? size : ''} menu-item`}>
    <div
      style={{
        background: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
