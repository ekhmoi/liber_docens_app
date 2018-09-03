import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from "../components/Input";
import Colors from "../constants/Colors";
import {Button} from "../components/Button";
import {RadioButton, RadioButtonGroup} from "../components/RadioButtonGroup";

export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: '#f3f3f3',
            borderBottomWidth: 0,
        },
        headerTintColor: Colors.tintColor
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, opacity: 0.8, fontWeight: '600', }}>Sign up</Text>
                <Text style={{ fontSize: 17, opacity: 0.6, fontWeight: '400', marginBottom: 50, marginTop: 20 }}>
                    Please register to continue.</Text>
                <Input placeholder={'Full Name'} icon={'account'} color={Colors.tintColor} fill='outline' />
                <Input placeholder={'Email'} icon={'email'} color={Colors.tintColor} fill='outline' />
                <Input placeholder={'Password'} icon={'key'} color={Colors.tintColor} fill='outline' secureTextEntry={true} />
                <Input placeholder={'Confirm Password'} icon={'key'} color={Colors.tintColor} fill='outline' secureTextEntry={true} />

                <Text style={{opacity: 0.5, fontWeight: '400', marginTop: 15, marginBottom: -10}}>{'Please select how you are going to use this service. \n\rAs a:'}</Text>
                <RadioButtonGroup placeholder={'Account type'} onChange={(ev) => console.log(ev)}>
                    <View text={'Teacher'} value={'teacher'}/>
                    <View text={'Student'} value={'student'} />
                </RadioButtonGroup>
                <Button text="Sign Up" expand='block' icon='account-plus' iconPosition='right' shape={'round'}/>
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
