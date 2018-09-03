import { createStackNavigator } from 'react-navigation';
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        headerMode: 'none'
    },
    SignUp: {
        screen: SignUpScreen
    },
    // SignUp: {
    //     screen: SignUpScreen,
    //     navigationOptions: {
    //         title: "Sign In"
    //     }
    // }
}, {
    headerMode: 'screen'
});
