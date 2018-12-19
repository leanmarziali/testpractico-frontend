import React from 'react';
import { 
    Col, 
    Row,
    Container
} from 'reactstrap';

import Style from './Header.style.scss';
import LogoML from '../../assets/img/Logo_ML.png';

const Header = ( { children }) => (
    <div className={Style.header}>
        <Container >
            <Row>
                <Col xs="2" sm="2" md="1">
                    <img
                        src={LogoML} 
                        alt="ML Logo" 
                    />
                </Col>
                <Col xs="10" sm="10" md="11">
                    { children }
                </Col>
            </Row>
        </Container>
    </div>
);

export default Header;