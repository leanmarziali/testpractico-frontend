import React from 'react';
import {
    Row,
    Col,
    Container
} from 'reactstrap';

import Style from './Product.style.scss';
import FreeShippingLogo from '../../../assets/img/ic_shipping.png';

const productThumbnail = (picture) => (
    <img 
        className="productImg"
        src={picture}
        alt="Product thumb"
    />
);

const productHeader = (price, free_shipping, location) => (
    <Row className="productHeader">
        <Col xs="2" sm="2" md="2" lg="2" xl="2">
            <div className="productPrice">
                { price.currency + price.amount.toLocaleString('es-Ar') }
                { free_shipping && 
                    <img 
                        className="shippingLogo"
                        src={FreeShippingLogo} 
                        alt="Free shipping logo" 
                    />
                }
            </div>
        </Col>
        <Col 
            xs={{size: 2, offset: 3}}
            sm={{size: 3, offset: 4}} 
            md={{size: 3, offset: 6}} 
            lg={{size: 2, offset: 7}} 
            xl={{size: 2, offset: 8}}
        >
            <div className="productLocation">
                { location }
            </div>
        </Col>
    </Row>
);

const productBody = (title) => (
    <Row>
        <Col xs="5" sm="5" md="6" lg="6" xl="6">
            <div className="productTitle">
                { title }
            </div>
        </Col>
    </Row>
);

const Product = ({ product, onProductHandler }) => (
    <div
        className={Style.product}
        onClick={ () => { onProductHandler(product.id)} }
    >
        { productThumbnail(product.picture) }
        <Container 
            className={Style.productInfo}
        >
            { productHeader(product.price, product.free_shipping, product.address) }
            { productBody(product.title) }
        </Container>
    </div>
);

export default Product;