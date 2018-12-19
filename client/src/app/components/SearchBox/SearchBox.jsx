import React from 'react';
import { Input, InputGroup } from 'reactstrap';

import Style from './SearchBox.style.scss';
import imgSearch from '../../assets/img/ic_Search.png';

const onEnterPressHandler = (event, onSearchHandler)  => {
    let value;
    if (event.which === 13 || event.keyCode === 13) {// Enter pressed
        value = event.target.value;
        if (value.trim() !== "")
            onSearchHandler(value);
    }
}

const onClickHandler = (value, onSearchHandler) => {
    if (value.trim() !== "")
        onSearchHandler(value);
}

const SearchBox = ( { placeholderText, onSearchHandler, query}) => {
    let input = "";
    return (
        <div>
            <InputGroup>
                <Input 
                    className={Style.inputBox}
                    type="text"
                    placeholder={placeholderText}
                    onKeyPress={(event) => {onEnterPressHandler(event, onSearchHandler)} }
                    onChange={(event) => input = event.target.value} />
                <div 
                    className={Style.imgSearch}
                    onClick={ () => { onClickHandler(input, onSearchHandler) } }
                >
                    <img 
                        src={imgSearch} 
                        alt="Search logo" 
                    />
                </div>
            </InputGroup>
        </div>
    );
};

export default SearchBox;