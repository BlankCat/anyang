'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableWithoutFeedback,
    ToastAndroid,
} from 'react-native';

import Colors from '../constants/Colors.js';
import {changeLoginAuth} from '../actions/login';
import homePage from './homePage';

let et_uname;
let et_pwd;
export default class login extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }


    render() {
        const dismissKeyboard = require('dismissKeyboard');
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center',marginTop:32}}>
                    <Image style={{width: 90,height: 90,margin: 8,borderRadius:0,}} source={require('../imgs/icon/logo.png')}/>
                </View>

                <View style={{margin:16,backgroundColor:'#fff',elevation: 4}}>
                    <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                        <View style={{flexDirection: 'row',height: 48,alignItems: 'center'}}>
                            <Image style={{width: 32,height: 32,margin: 8}} source={require('../imgs/icon/icon-user.png')}/>
                            <TextInput  style={{height: 48,flex: 1}}
                                        placeholder={'请输入用户名'}
                                        underlineColorAndroid={'transparent'}
                                        autoCapitalize={'none'}
                                        autoCorrect={false}
                                        onChangeText={(text)=>{et_uname=text}}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{marginLeft:8,height:1,backgroundColor:'#ccc',marginRight: 8}}/>
                    <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                        <View style={{flexDirection: 'row', height: 48, backgroundColor: 'white', alignItems: 'center'}}>
                            <Image style={{width: 32,height: 32,margin: 8}} source={require('../imgs/icon/icon-lock.png')}/>
                            <TextInput style={{height: 48,flex: 1}}
                                       placeholder={'请输入密码'}
                                       underlineColorAndroid={'transparent'}
                                       secureTextEntry={true}
                                       onChangeText={(text)=>{et_pwd=text}}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{marginTop: 32,marginLeft: 16,marginRight:16,elevation: 4,backgroundColor:Colors.mainColor}}>
                    <TouchableHighlight
                        onPress={this.onLogin}
                        underlayColor={'#999'}
                        style={{height: 48,alignItems: 'center',justifyContent:'center'}}>
                        <Text style={{fontSize: 16,color: 'white',fontWeight: '300',}}>登        录</Text>
                    </TouchableHighlight>
                </View>


            </View>
        );
    }

    onLogin() {
        const {navigator} = this.props;
        if(et_uname==''||et_uname==undefined){
            ToastAndroid.show('用户名不能为空', ToastAndroid.SHORT);
            return;
        }
        if(et_pwd==''||et_pwd==undefined){
            ToastAndroid.show('密码不能为空', ToastAndroid.SHORT);
            return;
        }
        ToastAndroid.show('登录中...', ToastAndroid.SHORT);
        if(navigator){
            navigator.push({
                component: homePage,
                name: 'homePage'
            });

        }

    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainBackground,
    },
});