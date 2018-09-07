import React from "react";
import PropTypes from "prop-types";
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // 5.0.0
import { getColorContrast } from "../utils/getColorContrast";
import {Button} from "./Button";
import {Input} from "./Input";

export class RadioButtonGroup extends React.PureComponent {
    currentIndex = -1;
    state = {
        value: null
    }
    constructor() {
        super();
        this.Buttons = [];

    }
    render() {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {this.getChildren()}
            </View>
        )
    }

    getChildren = () => (
        this.props.children.map((child) => (
            <RadioButton key={child.props.value} selected={this.state.value === child.props.value} ref={(ref) => this.Buttons.push(ref)} text={child.props.text} onPress={() => this.onClickButton(child.props.value)}/>
        ))
    );

    onClickButton(value) {
        if (this.state.value === value) {
            return;
        }

        this.setState({value});
        this.props.onChange(value);
    }
}

export class RadioButton extends React.PureComponent {

    render() {
        return (
            <Button buttonStyle={{paddingLeft: 0}} fill={'clear'} text={this.props.text} iconPosition={'left'} icon={this.props.selected ? 'radiobox-marked' : 'radiobox-blank'} onPress={this.props.onPress}/>
        );
    }
}

const defaultStyles = {

};
