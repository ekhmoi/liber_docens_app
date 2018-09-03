import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import PublicNavigator from "./PublicNavigator";
import TeacherTabNavigator from "./TeacherTabNavigator";
import StudentTabNavigator from "./StudentTabNavigator";

export const createRootNav = (signedIn = false, type) => createSwitchNavigator({
    PublicNav: PublicNavigator,
    TeacherNav: TeacherTabNavigator,
    StudentNav: StudentTabNavigator
}, {
    initialRouteName: !signedIn ? 'PublicNav' : type === 'teacher' ? 'TeacherNav' :  type === 'student' ? 'StudentNav' : 'PublicNav'
});
