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


import TabNavigator from 'react-native-tab-navigator';

import msg from './msg/msg';
import find from './find/find';
import myself from './me/myself';
const Main_MSG = '消息';
const Main_FIND = '发现';
const Main_ME = '我的';
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
          this.state = {selectedTab: Main_MSG, tabBarShow:true};
          this._renderTabItem =  this._renderTabItem.bind(this);
      }

    /**
     *img ；默认图标
     *selectedImg：选中的图标
     *tag：标题
     *childView：子控件
     */
    _renderTabItem(img, selectedImg, tag, childView) {
        return (
                <TabNavigator.Item
                    selected={this.state.selectedTab === tag}
                    renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                    title={tag}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                    onPress={() => this.setState({ selectedTab: tag })}>
                    {childView}
                </TabNavigator.Item>


            );
    }

    _createChildView1(tag) {
        let renderView;
        switch (tag) {
            case Main_MSG:
                //renderView = <msg />;
                return (<View style={styles.container}>
                    <Text >
                        消息界面
                    </Text>
                </View>)
                break;
            case Main_FIND:
                //renderView = <find />;
                return (<View style={styles.container}>
                    <Text >
                        发现界面
                    </Text>
                </View>)
                break;
            case Main_ME:
                //renderView = <myself />;
                return <myself />;
                //return (<View style={styles.container}>
                //    <Text >
                //        我的界面
                //    </Text>
                //</View>)
                break;
            default:
                break;
        }
        //return (<View style={styles.container}>
        //    <Text >
        //    我的界面
        //    </Text>
        //</View>)
        //return (<View style={styles.container}>{renderView}</View>)
        //return (<View style={{flex: 1}}>{renderView}</View>)
    }

    static _createChildView(tag) {
        return (
            <View style={styles.childView}>
                <Text style={styles.childView_text}>{tag}</Text>
            </View>
        )
    }

    render() {
        let {tabBarShow} = this.state;
        //console.log(tabBarShow);
        return (
            <View style={styles.container}>
                <TabNavigator hidesTabTouch={true}
                              sceneStyle={styles.sceneStyle}
                              tabBarStyle={tabBarShow ? styles.tabNav : styles.tabNavHide}
                              overflow={'hidden'} >
                    {this._renderTabItem(Main_MSG_NORMAL, Main_MSG_FOCUS, Main_MSG,this._createChildView1(Main_MSG))}
                    {this._renderTabItem(Main_FIND_NORMAL, Main_FIND_FOCUS, Main_FIND,this._createChildView1(Main_FIND))}
                    {this._renderTabItem(Main_ME_NORMAL, Main_ME_FOCUS, Main_ME,this._createChildView1(Main_ME))}
                </TabNavigator>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sceneStyle:{
        paddingBottom: 0
    },
    childView:{
        flex:1,
        backgroundColor:'#00baff',
        alignItems:'center',
        justifyContent:'center'
    },
    childView_text:{
        fontSize:22
    },
    tabNav: {
        height: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#E8E8E8'
    },
    tabNavHide: {
        position: 'absolute',
        top: Dimensions.get('window').height,
        height: 0
    },
    webview_style:{
        backgroundColor:'#00ff00',
    },
    tab: {
        height: 60,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginTop: 12.5
    },
});


