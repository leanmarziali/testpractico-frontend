import React from 'react';
import { 
    Container
} from 'reactstrap';

import Style from './Categories.style.scss';

const category = (data) => (
    data.map( (category, i , collection) => {
        let salida;
        if (i < collection.length - 1)
          salida = (
            <div key={category.id} style={{ whiteSpace: "pre" }}>
                { category.name + " > " }
            </div>
          );
        else
            salida = (
                <div key={category.id} style={{ fontWeight: "bold" }}>
                { category.name }
                </div>
            );
        return salida;
    })
);

const Categories = ({ data }) => (
    <Container className={Style.categories}>
        { category(data) }
    </Container>
);

export default Categories;