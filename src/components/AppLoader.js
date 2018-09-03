import React from "react";
import Colors from "../constants/Colors";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";

@connect(
    (store) => ( { app: store.app } )
)
export class AppLoader extends React.PureComponent {
    render() {
        return (
            this.props.app.loading &&
            <View style={ styles.loaderContainer }>
                <ActivityIndicator size="small" color={ Colors.tintColor }/>
            </View>
        )
    }
}

const styles = {
    loaderContainer: {
        backgroundColor: 'rgba(0,0,0, 0.3)',
        zIndex: 100,
        position: 'absolute',
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
