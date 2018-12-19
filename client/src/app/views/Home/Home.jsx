import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import SearchResults from '../../components/SearchResults/SearchResults';

import Style from './Home.style.scss';

class Home extends Component {

    onSearchHandler = (value) => {
        // Input sanitizing stuff should be here
        this.props.history.push(`${this.props.match.path}items?search=${value}`);
    }

    render() {
        return (
            <div className={Style.container}>
                <Header >
                    <SearchBox 
                        placeholderText="Nunca dejes de buscar"
                        onSearchHandler={this.onSearchHandler}
                        query={this.props.location.search}
                    />
                </Header>
                <Route
                    path={`${this.props.match.path}items`}
                    render={({match}) => ( 
                        <SearchResults 
                            query={new URLSearchParams(this.props.location.search).get('search')} 
                            match={match}
                        />
                    ) }
                />
            </div>
        );
    }
};

export default withRouter(Home);