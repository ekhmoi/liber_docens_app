import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // 5.0.0
import { getColorContrast } from "../utils/getColorContrast";

export class Input extends React.PureComponent {
    static propTypes = {
        containerStyle: PropTypes.object,
        placeholder: PropTypes.string,
        color: PropTypes.string,
        disabled: PropTypes.bool,
        fill: PropTypes.oneOf(['clear', 'solid', 'outline']),
        icon: PropTypes.string,
        iconStyle: PropTypes.object,
        iconPosition: PropTypes.oneOf(['right', 'left']),
        onChangeText: PropTypes.func,
        shape: PropTypes.oneOf(['default', 'round']),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        inputStyle: PropTypes.object,
        secureTextEntry: PropTypes.bool
    };
    state = {
        focused: false
    };

    get placeholder() {
        return this.props.placeholder || '';
    }
    get containerStyle() {
        return this.props.containerStyle || {};
    }

    get color() {
        return this.props.color || '#fff';
    }

    get disabled() {
        return this.props.disabled || false;
    }

    get fill() {
        return this.props.fill || 'solid';
    }

    get icon() {
        return this.props.icon;
    }

    get iconStyle() {
        return this.props.iconStyle || {};
    }
    get iconPosition() {
        return this.props.iconPosition || 'right';
    }
    get inputStyle() {
        return this.props.inputStyle || {};
    }

    get secureTextEntry() {
        return this.props.secureTextEntry || false;
    }

    render() {
        return (
            <View style={this._getViewStyle()}>
                <TextInput
                    value={this.props.value}
                    style={this._getInputStyle()}
                    onFocus={() => this.setState({focused: true})}
                    onBlur={() => this.setState({focused: false})}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.secureTextEntry}
                    placeholder={this.placeholder}
                />
                <MaterialCommunityIcons name={this.icon} style={this._getIconStyle()} />
            </View>
        )
    }

    _getViewStyle() {
        const style = {
            flexDirection: this.iconPosition !== 'right' ? 'row-reverse' : 'row',
        };

        if (this.fill === 'outline') {
            style.backgroundColor = 'transparent';
            style.borderBottomWidth = 1;
            style.borderBottomColor = this.state.focused ?  this.color : 'rgba(0,0,0, 0.2)';
        } else {
            style.backgroundColor = this.color;
            style.shadowColor = this.color;
        }

        return { ...defaultStyles.viewContainer, ...style, ...this.containerStyle }
    }

    _getIconStyle() {
        const style = {};

        if (!this.icon) {
            style.display = 'none';

        } else {
            if (this.iconPosition === 'right') {
                style.marginLeft = 10;
            } else {
                style.marginRight = 10;
            }

            if (this.fill === 'outline') {
                style.color = this.color;
            } else {
                style.color = getColorContrast(this.color);
            }
        }


        return { ...defaultStyles.iconStyle, ...style, ...this.iconStyle }
    }

    _getInputStyle() {
        const style = {
            color: this.fill === 'outline' ? getColorContrast('#ffffff') : getColorContrast(this.color)
        };
        return { ...defaultStyles.textInput, ...style, ...this.inputStyle }
    }

}

const defaultStyles = {
    viewContainer: {
        height: 44,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 0,
        marginTop: 5,
        marginBottom: 5,
        // paddingLeft: 10,
        // paddingRight: 10,
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 1,
    },
    iconStyle: {
        fontSize: 15,
    },
    textInput: {
        flex: 1,
        color: 'red'
    }
};
