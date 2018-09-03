import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Input } from "../components/Input";
import Colors from "../constants/Colors";
import { Button } from '../components/Button';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: '#f3f3f3',
            borderBottomWidth: 0,
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, opacity: 0.8, fontWeight: '600', }}>Sign in</Text>
                <Text style={{ fontSize: 17, opacity: 0.6, fontWeight: '400', marginBottom: 50, marginTop: 20 }}>
                    Please enter your email and password to sign in and access the magical functionality.</Text>
                <Input placeholder={'Email'} icon={'email'} color={Colors.tintColor} fill='outline' />
                <Input placeholder={'Password'} icon={'key'} color={Colors.tintColor} fill='outline' secureTextEntry={true} />
                <Button text="Sign In" expand='block' iconPosition={'right'} round={true} icon={'login'} shape={'round'} />
                <Button text="Sign Up" expand='block' fill='clear' icon='account-plus' iconPosition='right' onPress={() => this.props.navigation.navigate('SignUp')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f3f3f3',
    },
});
