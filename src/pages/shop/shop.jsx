import React, { Component } from 'react'

import SHOP_DATA from './shopData'

import Collection from '../../components/collection/collection'

export default class ShopPage extends Component {
    
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Collection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
