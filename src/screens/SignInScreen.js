import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Input } from "../components/Input";
import Colors from "../constants/Colors";
import { Button } from '../components/Button';
import {Actions} from "../store/actions";
import {connect} from "react-redux";
import {GlobalStyles} from "../constants/GlobalStyles";
import {StyledText} from "../components/StyledText";

@connect(
    (store) => ({auth: store.auth})
)
export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: '#f3f3f3',
            borderBottomWidth: 0,
        },
    };

    state = {
        email: 'a@a.a',
        password: 'a'
    };

    render() {
        return (
            <View style={GlobalStyles.container}>
                <StyledText style={{ fontSize: 30, opacity: 0.8, fontWeight: '600', }}>Sign in</StyledText>
                <StyledText style={{ fontSize: 17, opacity: 0.6, fontWeight: '400', marginBottom: 50, marginTop: 20 }}>
                    Please enter your email and password to sign in and access the magical functionality.</StyledText>
                <Input value={this.state.email} onChangeText={(email) => this.setState({email})} placeholder={'Email'} icon={'email'} color={Colors.tintColor} fill='outline' />
                <Input value={this.state.password} onChangeText={(password) => this.setState({password})} placeholder={'Password'} icon={'key'} color={Colors.tintColor} fill='outline' secureTextEntry={true} />
                <Button text="Sign In" expand='block' iconPosition={'right'} round={true} icon={'login'} shape={'round'} onPress={this.signIn} />
                <Button text="Sign Up" expand='block' fill='clear' icon='account-plus' iconPosition='right' onPress={() => this.props.navigation.navigate('SignUp')}/>
            </View>
        );
    }

    signIn = () => {
        this.props.dispatch(Actions.Auth.signin(this.state)).then((user) => {
            const navigateTo = user.type === 'teacher' ? 'TeacherNav' : 'StudentNav';
            this.props.navigation.navigate(navigateTo)
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f3f3f3',
    },
});
