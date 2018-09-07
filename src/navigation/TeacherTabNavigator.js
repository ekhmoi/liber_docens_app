import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TeacherQuizScreen from "../screens/TeacherQuizScreen";
import Colors from "../constants/Colors";
import QuizTypeSelectionScreen from "../screens/QuizTypeSelectionScreen";
import {GlobalStyles} from "../constants/GlobalStyles";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Upcoming',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='calendar'
        />
    ),
};

const QuizStack = createStackNavigator({
    MyQuiz: TeacherQuizScreen,
    SelectQuizType: QuizTypeSelectionScreen
});

QuizStack.navigationOptions = {
    headerStyle: GlobalStyles.header,
    tabBarLabel: 'Quizzes',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='wunderlist'
        />
    ),
};

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
    tabBarLabel: 'Students',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='account-multiple'
        />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='settings'
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    QuizStack,
    LinksStack,
    SettingsStack,
}, {
    tabBarOptions: {
        activeTintColor: Colors.tintColor,
        style: {
            backgroundColor: '#f9f9f9'
        }
    }
});
