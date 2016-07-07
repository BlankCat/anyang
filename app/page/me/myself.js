'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import About from './About';
export default class myself extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state = {};
          this.handler = this.handler.bind(this);

      }


    handler() {
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                component: About,
                name: 'About',
                params:{
                    value:"哈哈"
                }
            });

        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.item} onPress={()=>this.handler()}>
                    <View style={styles.item1}>
                        <Text style={{marginLeft:5}}>关于</Text>
                    </View>
                    <View style={styles.item3}>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        marginTop:10,
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height:45,
        justifyContent: 'center',

    },
    item1: {
        flex: 1,
        alignSelf:'center',
        marginLeft:10,
        flexDirection: 'row',
    },
    item3: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'center',
        marginRight:10,
    },
});

