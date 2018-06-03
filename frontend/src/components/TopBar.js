import {MDCTopAppBar} from '@material/top-app-bar/index';
import React, { Component } from 'react';

class TopBar extends Component {

    render () {
        // Instantiation
        const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        const topAppBar = new MDCTopAppBar(topAppBarElement);

        <topAppBar />
    }
};

export default TopBar;
