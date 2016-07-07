import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View
} from 'react-native';

import Splash from '../app/page/splash';

var _navigator, isRemoved = false;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route} />
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#3e9ce9"
                    barStyle="default"
                />
                <Navigator
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component: Splash,
                        name: 'splash'
                    }}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

export default App;