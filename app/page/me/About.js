import React, { Component } from 'react';
import {
    StyleSheet,
    WebView,
    Text,
    View,
    ToastAndroid,
} from 'react-native';


export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value:this.props.value,
    };
  }

  render() {
    return (
      <View style={styles.container}>
           <Text>姓名: {this.props.value}</Text>
          <WebView source={{uri: 'http://scorpionjay.github.io/about/'}} style={styles.webView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  webView: {
   flex: 1,
  },
});


