import {MDCTopAppBar} from '@material/top-app-bar/index';
import React, { Component } from 'react';

class TopBar extends Component {

    render () {
        // Instantiation
        const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        const topAppBar = new MDCTopAppBar(topAppBarElement);

        return (
            <header class="mdc-top-app-bar">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
                <span class="mdc-top-app-bar__title">Title</span>
                </section>
            </div>
            </header>
        );
    }
};

export default TopBar;
