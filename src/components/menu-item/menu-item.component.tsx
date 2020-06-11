import React from 'react';

import './menu-item.styles.scss';

const MenuItem = (props: any) => (
  <div className={`${props.size} menu-item`}>
    <div style={{ backgroundImage: `url(${props.imageUrl})` }} 
         className="background-image"></div>
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
