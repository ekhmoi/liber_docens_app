import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from "../components/Input";
import Colors from "../constants/Colors";
import {Button} from "../components/Button";
import {RadioButton, RadioButtonGroup} from "../components/RadioButtonGroup";
import {connect} from "react-redux";
import {Actions} from "../store/actions";
import {GlobalStyles} from "../constants/GlobalStyles";
import {StyledText} from "../components/StyledText";

@connect(
    (store) => ({
        auth: store.auth
    })
)
export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: '#f3f3f3',
            borderBottomWidth: 0,
        },
        headerTintColor: Colors.tintColor
    };

    state = {
        name: 'Arif Mammadov',
        email: 'arif.14233@icloud.com',
        password: 'a',
        passwordConfirm: 'a',
        type: 'teacher'
    };

    render() {
        return (
            <View style={GlobalStyles.container}>
                <StyledText style={{ fontSize: 30, opacity: 0.8, fontWeight: '600', }}>Sign up</StyledText>
                <StyledText style={{ fontSize: 17, opacity: 0.6, fontWeight: '400', marginBottom: 50, marginTop: 20 }}>
                    Please register to continue.</StyledText>
                <Input value={this.state.name} onChangeText={(name) => this.setState({name})} placeholder={'Full Name'} icon={'account'} color={Colors.tintColor} fill='outline' />
                <Input value={this.state.email} onChangeText={(email) => {
                    this.setState({email});
                    console.log('Changed email to: ' + email);
                }} placeholder={'Email'} icon={'email'} color={Colors.tintColor} fill='outline' />
                <Input value={this.state.password} onChangeText={(password) => this.setState({password})} placeholder={'Password'} icon={'key'} color={Colors.tintColor} fill='outline' secureTextEntry={true} />
                <Input value={this.state.passwordConfirm} onChangeText={(passwordConfirm) => this.setState({passwordConfirm})} placeholder={'Confirm Password'} icon={'key'} color={Colors.tintColor} fill='outline' secureTextEntry={true} />

                <StyledText style={{opacity: 0.5, fontWeight: '400', marginTop: 15, marginBottom: -10}}>{'Please select how you are going to use this service. \n\rAs a:'}</StyledText>
                <RadioButtonGroup placeholder={'Account type'} onChange={(type) => this.setState({type})}>
                    <View text={'Teacher'} value={'teacher'}/>
                    <View text={'Student'} value={'student'} />
                </RadioButtonGroup>
                <Button text="Sign Up" expand='block' icon='account-plus' iconPosition='right' shape={'round'} onPress={this.onClickSignUp}/>
            </View>
        );
    }

    onClickSignUp = () => {
        this.props.dispatch(Actions.Auth.signup(this.state)).then((user) => {
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
