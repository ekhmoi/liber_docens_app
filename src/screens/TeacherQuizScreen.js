
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button} from "../components/Button";
import {GlobalStyles} from "../constants/GlobalStyles";
import {QuizTypeItem} from "../components/QuizTypeItem";
export default class TeacherQuizScreen extends React.Component {
    static navigationOptions = {
        title: 'Quizzes',
        headerStyle: GlobalStyles.header,
        headerTitleStyle: GlobalStyles.headerTitle
    };
    types = [
        { icon: 'audiobook', title: 'Listening', description: 'Listening lessons.', count: '12', id: 'listeningLessons', color: '#165ff4' },
        { icon: 'audiobook', title: 'Tests', description: 'Create template of tests to reuse in future without wasting any time', count: '3', id: 'tests', color: '#00a275' },
        { icon: 'puzzle', title: 'Puzzles', description: 'Great was to challenge your students!', count: '35', id: 'puzzles', color: '#fe7b46' },
        { icon: 'library-books', title: 'Dictionary', description: 'Add texts and assign to your students for their next course', count: '857', id: 'texts', color: '#e9215f' },
    ];

    get navigate() {
        return this.props.navigation.navigate;
    }

    _renderTypes = () => this.types.map(type => <QuizTypeItem type={type} key={type.id}/>);

    render() {
        return (
            <View style={{...GlobalStyles.container, padding: 0}}>
                <ScrollView style={{padding: GlobalStyles.container.padding}}>
                    {this._renderTypes()}
                </ScrollView>
                <Button shape={'fab'} icon={'plus'} buttonStyle={styles.fabStyle} iconStyle={{fontSize: 20}} onPress={() => this.navigate('SelectQuizType')}/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#f3f3f3',
    },
    fabStyle: {
        alignSelf: 'flex-end',
        bottom: 5,
        right: 10,
        position: 'absolute'
    }
};
