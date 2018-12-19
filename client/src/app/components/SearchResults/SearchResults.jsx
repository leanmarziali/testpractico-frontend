import React, { Component } from 'react';
import {
    Route, 
    withRouter
} from 'react-router-dom';

import Style from './SearchResults.style.scss';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ProductsManager from '../../helpers/ProductsManager';

class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            products: {
                categories: [],
                items: []
            },
            productID: ""
        }
    }

    componentWillMount() {
        if (this.props.query)
            ProductsManager.getProducts(this.props.query)
             .then( response => {
                 if (response.categories && response.items)
                    this.setState({
                        products: response
                    })
             });
    }

    onProductHandler = (productId) => {
        if (productId) {
         this.setState({
             productID: productId
         });
         this.props.history.push(`${this.props.match.path}/${productId}`);
        }
    }

    render() {
        return (
            <div className={Style.searchResults}>
                <Categories data={this.state.products.categories}/>
                { (this.state.productID.trim() === "") && <Products onProductHandler={this.onProductHandler} data={this.state.products.items} /> }
                <Route
                    exact
                    path={`${this.props.match.path}/:id`}
                    render={({match}) => {
                        return <ProductDetails id={match.params.id} />
                     }}
                />
            </div>
        );
    }
};

export default withRouter(SearchResults);