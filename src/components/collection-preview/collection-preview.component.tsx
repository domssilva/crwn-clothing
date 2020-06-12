import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props: any) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item: any, idx: number) => idx < 4)
          .map(( (data: any) => (
            <CollectionItem key={data.id} {...data}/>
          )))
        }
      </div>
    </div>
  );
}

export default CollectionPreview;
