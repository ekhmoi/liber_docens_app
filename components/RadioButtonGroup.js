import React from "react";
import PropTypes from "prop-types";
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // 5.0.0
import { getColorContrast } from "../utils/getColorContrast";
import {Button} from "./Button";
import {Input} from "./Input";

export class RadioButtonGroup extends React.PureComponent {
    buttons = [];
    currentIndex = -1;
    render() {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {this.props.children.map((child, index) => {
                    return <RadioButton key={child.props.value} ref={(ref) => this.buttons.push(ref)} text={child.props.text} onPress={() => this.onClickButton(index, child.props.value)}/>
                })}
            </View>
        )
    }
    onClickButton(index, value) {
        if (index === this.currentIndex) {
            return;
        }

        this.currentIndex = index;
        this.props.onChange(value);
        this.buttons.forEach((ref, i) => {
            ref.setState({
                selected: index === i
            });
        });
    }
}

export class RadioButton extends React.PureComponent {
    state = {
        selected: false
    };
    render() {
        return (
            <Button buttonStyle={{paddingLeft: 0}} fill={'clear'} text={this.props.text} iconPosition={'left'} icon={this.state.selected ? 'radiobox-marked' : 'radiobox-blank'} onPress={this.props.onPress}/>
        );
    }
}

const defaultStyles = {

};
