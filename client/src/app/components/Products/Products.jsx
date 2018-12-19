import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Style from './Products.style.scss';
import Product from './Product/Product';

const parseProducts = (data, onProductHandler) => (
    data.map( (product, i, collection) => (
        <Row key={ "ROW_" + product.id }>
            <Col key={ "COL_" + product.id }>
                <Product
                    onProductHandler={onProductHandler}
                    key={ product.id }
                    product={ product } 
                />
                { (i < collection.length - 1) && <hr /> }
            </Col>
        </Row>
   ))
);

const Products = ({ data, onProductHandler }) => (
    <Container className={Style.products}>
        { parseProducts(data, onProductHandler) }
    </Container>
);

export default Products;