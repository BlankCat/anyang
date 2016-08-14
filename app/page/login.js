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
    NetInfo
} from 'react-native';

import Colors from '../constants/Colors.js';
import {changeLoginAuth} from '../actions/login';
import homePage from './homePage';
import Config from '../constants/config'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            data:null,
        };
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
                                        value={this.state.username}
                                        onChangeText={(username) => this.setState({username})}
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
                                       value={this.state.password}
                                       onChangeText={(password) => this.setState({password})}
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

                <View style={{marginTop: 32,marginLeft: 16,marginRight:16,elevation: 4,backgroundColor:Colors.mainColor}}>
                    <TouchableHighlight
                        onPress={this.onRegister}
                        underlayColor={'#999'}
                        style={{height: 48,alignItems: 'center',justifyContent:'center'}}>
                        <Text style={{fontSize: 16,color: 'white',fontWeight: '300',}}>注        册</Text>
                    </TouchableHighlight>
                </View>



            </View>
        );
    }
    onRegister(){//注册页面
        ToastAndroid.show('go register page ...', ToastAndroid.SHORT);
    }
    onLogin() {
        let {username,password} = this.state
        if(username==''||username==undefined){
            ToastAndroid.show('用户名不能为空', ToastAndroid.SHORT);
            return;
        }

        if(password==''||password==undefined){
            ToastAndroid.show('密码不能为空', ToastAndroid.SHORT);
            return;
        }
        this.fetchData();
    }

    fetchData(){
        const {navigator} = this.props;
        //判断网络
        NetInfo.fetch().done((reach)=>{
            console.log('Initial:'+reach);
            ToastAndroid.show('使用网络'+reach,ToastAndroid.SHORT);
            if(reach.toUpperCase()==='NONE'||reach.toUpperCase()==='UNKNOWN')
            {
                ToastAndroid.show('没有网络',ToastAndroid.SHORT);
            }else{
                fetch(Config.loginUrl,{
                    headers:{
                        'Username': this.state.username,
                        'Password': this.state.password
                    },
                    method:'POST'
                })
                .then((response)=>{
                    const authToken = response.headers.get("Auth-Token");
                    if(authToken){
                        // Alert.alert('',authToken);
                        storage.save({
                            key: 'loginState',  //注意:请不要在key中使用_下划线符号!
                            rawData: {
                                from: 'some other site',
                                userid: this.state.username,
                                token: authToken
                            },
                            // 如果不指定过期时间，则会使用defaultExpires参数
                            // 如果设为null，则永不过期
                            expires: 1000 * 3600
                        });

                        ToastAndroid.show('登录中...', ToastAndroid.SHORT);
                        if(navigator){
                            navigator.push({
                                component: homePage,
                                name: 'homePage'
                            });
                        }
                    }else{
                        ToastAndroid.show('账号或密码错误',ToastAndroid.SHORT);;
                    }
                })
                .catch(function(ex){
                    console.log('parsing failed',ex);
                    ToastAndroid.show('请求失败'+ex,ToastAndroid.SHORT);
                })
            }
        });


    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainBackground,
    },
});