import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

interface ShopProps {};
interface ShopState {
  collections: Array<any>,
};

class ShopPage extends Component<ShopProps, ShopState> {
  constructor(props: ShopProps) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({id, ...otherSectionProps})  => (
            <CollectionPreview key={id} {...otherSectionProps}/>
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
