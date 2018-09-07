import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {GlobalStyles} from "../constants/GlobalStyles";
import {Button} from "../components/Button";

export default class QuizTypeSelectionScreen extends React.Component {
    static navigationOptions = {
        title: 'Select Quiz Type',
    };

    render() {
        return (
            <ScrollView style={GlobalStyles.container}>
                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <Button color={'#fffff'} text={'Some text'}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
