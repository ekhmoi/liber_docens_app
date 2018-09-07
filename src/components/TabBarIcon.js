import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // 5.0.0

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <MaterialCommunityIcons
        name={this.props.name}
        size={20}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
