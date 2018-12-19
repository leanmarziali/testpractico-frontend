import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import Style from './ProductDetails.style.scss';
import ProductDetailsManager from '../../helpers/ProductDetailsManager';

export default class ProductDetails extends Component {
    constructor () {
        super();
        this.state = {
            details: null
        };
    }

    componentWillMount() {
        if (this.props.id)
        ProductDetailsManager.getProductDetails(this.props.id)
         .then( response => {
            if (response.item)
                this.setState({
                    details: response.item
                })
         });
    }
    // Workaround solution for condition label
    capitalize = (condition) => {
        return condition.charAt(0).toUpperCase() + condition.slice(1);
    }

    decimals = (strNumber) => {
        return strNumber.split(".")[1];
    }

    productDetailsImage = (picture) => (
        <Col xs="11" sm="11" md="9" lg="9" xl="9">
            <img 
                className="productDetailsImg"
                src={picture}
                alt="Product Img"
            />
        </Col>
    );

    productDetailsInfo = (productDetails) => (
        <Col xs="8" sm="8" md="8" lg="3" xl="3">
        <div className={Style.productDetailsInfo}>
            <div className="conditionSoldQuantity">
                { this.capitalize(productDetails.condition) + " - " + 
                productDetails.sold_quantity + " vendidos"
                }
            </div>
            <Row>
                <Col xs="11" sm="11" md="11" lg="11" xl="11">
                    <div className="title">
                        { productDetails.title }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="price">
                        { productDetails.price.currency +
                        productDetails.price.amount.toLocaleString('es-Ar')
                        }
                        <label className="priceDecimals">
                        {this.decimals(productDetails.price.amount.toFixed(productDetails.price.decimals))}
                        </label>
                    </label>
                </Col>
            </Row>
            <Button className="button">
                Comprar
            </Button> 
        </div>
        </Col>
    );

    productDetailsDescription = (description) => (
        <div className={Style.productDetailsDesc}>
            <Row>
                <Col>
                    <div className="descriptionTitle">
                        Descripción del producto
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="9" sm="9" md="9" lg="9" xl="9">
                <div className="descriptionContent">
                    { description }
                </div>
                </Col>
            </Row>
        </div>
    );

    productDetails = () => (
        <div className={Style.product}>
            <div className="productDetails">
                    <Row>
                        { this.productDetailsImage(this.state.details.picture) }
                        { this.productDetailsInfo(this.state.details) }  
                    </Row>
                { this.productDetailsDescription(this.state.details.description) }
            </div>
        </div>
    )

    render() {
        return (
            <Container>
              { this.state.details && this.productDetails() }
            </Container>
        );
    }
}
