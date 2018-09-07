import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import {createRootNav} from './navigation/AppNavigator';
import {Provider} from "react-redux";
import store from './store';
import {AppLoader} from "./components/AppLoader";

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            const AppNavigator = createRootNav(true, 'teacher');
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <Provider store={store}>
                        <View style={{flex: 1}}>
                            <AppNavigator/>
                            <AppLoader />
                        </View>
                    </Provider>
                </View>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('../assets/images/robot-dev.png'),
                require('../assets/images/robot-prod.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.FontAwesome.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'app-font-Bold': require('../assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
                'app-font-Light': require('../assets/fonts/Comfortaa/Comfortaa-Light.ttf'),
                'app-font': require('../assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
