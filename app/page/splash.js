'use strict';
import React, { Component } from 'react';

import
{
    Dimensions,
    Image,
    InteractionManager
} from 'react-native';

import login from './login';

var {height, width} = Dimensions.get('window');

export default class splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {navigator} = this.props;
        setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: login,
                    name: 'login'
                });
            });
        }, 2000);
    }

    render() {
        return (
            <Image
                style={{flex: 1, width: width, height: height}}
                source={require('../imgs/icon/splash_icon.png')}
            />
        );
    }
}