'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    Navigator,
    ToastAndroid,
    View
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator'

import Msg from './msg/msg';
import Find from './find/find';
import Myself from './me/myself';

import Config from '../constants/config'

const Main_MSG_NORMAL = require('../imgs/tab/tab_icon_message_normal.png');
const Main_MSG_FOCUS = require('../imgs/tab/tab_icon_message_selected.png');
const Main_FIND_NORMAL = require('../imgs/tab/tab_icon_prof_normal.png');
const Main_FIND_FOCUS = require('../imgs/tab/tab_icon_prof_selected.png');
const Main_ME_NORMAL = require('../imgs/tab/tab_icon_my_normal.png');
const Main_ME_FOCUS = require('../imgs/tab/tab_icon_my_selected.png');



export default class homePage extends Component {

    // 构造
      constructor(props) {
        super(props);
          this.state = {
              selectedTab:Config.initTab
          };
      }

    render() {
        const {navigator} = this.props;
        const {route} = this.props;
        return (

            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Msg'}
                    title="消息"
                    renderIcon={() => <Image style={styles.tabIcon} source={Main_MSG_NORMAL}/>}
                    renderSelectedIcon={() =><Image style={styles.tabIcon} source={Main_MSG_FOCUS}/>}
                    onPress={() => {this.setState({ selectedTab: 'Msg' });}}>
                    <Msg navigator={this.props.navigator} route={this.props.route}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Find'}
                    title="发现"
                    renderIcon={() => <Image style={styles.tabIcon} source={Main_FIND_NORMAL}/>}
                    renderSelectedIcon={() =><Image style={styles.tabIcon} source={Main_FIND_FOCUS}/>}
                    onPress={() => {this.setState({ selectedTab: 'Find' }); } }>
                    <Find navigator={this.props.navigator} route={this.props.route}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Me'}
                    title="我"
                    renderIcon={() =><Image style={styles.tabIcon} source={Main_ME_NORMAL}/>}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={Main_ME_FOCUS}/>}
                    onPress={() => {this.setState({ selectedTab: 'Me' }); } }>
                    <Myself navigator={this.props.navigator} route={this.props.route}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }


}

const styles = StyleSheet.create({
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginTop: 12.5
    },

});


