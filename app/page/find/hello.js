/**
 * Created by myzh on 2016/6/28.
 */
'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class hello extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text >
                    测试界面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
