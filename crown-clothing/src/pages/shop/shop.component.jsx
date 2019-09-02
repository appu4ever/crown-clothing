import React, { Component } from 'react';
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {

    state = { 
        collections: SHOP_DATA
     }

    render() {
        const { collections } = this.state 
        return (
            <div class = "shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => {
                        return <PreviewCollection key = {id} { ...otherCollectionProps} />
                    })
                }
            </div> 
        );
    }
}

export default ShopPage;