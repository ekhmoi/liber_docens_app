import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { getColorContrast } from '../utils/getColorContrast';
import Colors from "../constants/Colors";
import {StyledText} from "./StyledText";

/**
 * @examples
 *
 <Button text="Full Button" expand='block' round={true} icon={'tv'} iconPosition={'right'} disabled={true}/>
 <Button text="Full Button" expand='block' round={true} color='#10dc60'  icon={'sunrise'}/>
 <Button text="Block Round Button" expand='block' round={true} icon={'mic'}/>
 <Button text="Block Round Button" expand='block' round={true} color={'#f4f5f8'} icon={'navigation'}/>
 <Button text="Regular Button" icon={'log-in'}/>
 <Button text="Regular Button" icon={'log-in'} size={'small'} shape={'round'} iconPosition={'right'}/>
 <Button icon={'log-in'} round/>
 <Button fill='clear' icon={'map'}/>
 <Button text="Clear Button" fill='clear' icon={'speaker'}/>
 <Button text="Outline Button" fill='outline' icon={'watch'}/>
 <Button text="Outline Button" expand='block' fill='outline' icon={'volume'}/>
 <Button text="Outline Button" expand='block' fill='outline' shape={'round'} icon={'zap'}/>
 */
export class Button extends React.PureComponent {
    static propTypes = {
        buttonStyle: PropTypes.object,
        color: PropTypes.string,
        disabled: PropTypes.bool,
        expand: PropTypes.oneOf(['full', 'block', 'inline']),
        fill: PropTypes.oneOf(['clear', 'solid', 'outline']),
        icon: PropTypes.string,
        iconStyle: PropTypes.object,
        iconPosition: PropTypes.oneOf(['right', 'left', 'end', 'start']),
        onPress: PropTypes.func,
        shape: PropTypes.oneOf(['default', 'round', 'fab']),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        text: PropTypes.string,
        textStyle: PropTypes.object,
    };

    get color() {
        return this.props.color || Colors.tintColor;
    }

    get buttonStyle() {
        return this.props.buttonStyle || {};
    }

    get iconStyle() {
        return this.props.iconStyle || {};
    }

    get fill() {
        return this.props.fill || 'solid';
    }

    get expand() {
        return this.props.expand || 'inline'
    }

    get shape() {
        return this.props.shape || 'default';
    }

    get text() {
        return this.props.text;
    }

    get icon() {
        return this.props.icon;
    }

    get disabled() {
        return this.props.disabled;
    }

    get iconPosition() {
        return this.props.iconPosition || 'left';
    }

    get size() {
        return this.props.size || 'default';
    }

    render() {
        const { buttonStyle, iconStyle, textStyle } = this.getStyles();
        return (
            <TouchableOpacity style={buttonStyle} activeOpacity={0.7} disabled={this.disabled}
                onPress={this.props.onPress}>
                {this.icon && <MaterialCommunityIcons name={this.icon} style={iconStyle} /> }
                {this.text && <StyledText style={textStyle}>{this.text}</StyledText> }
            </TouchableOpacity>
        )
    }

    getStyles() {
        return {
            buttonStyle: this._getButtonStyle(),
            iconStyle: this._getIconStyle(),
            textStyle: this._getTextStyle()
        };
    }

    _getButtonStyle() {
        const style = {
            backgroundColor: this.color,
            borderColor: this.color,
            borderRadius: 2,
            opacity: this.disabled ? 0.6 : 1,
            flexDirection: 'row'
        };

        if (this.iconPosition === 'right' || this.iconPosition === 'end') {
            style.flexDirection = 'row-reverse';
        }

        if (this.size === 'small') {
            style.height = 30;
            style.paddingLeft = 10;
            style.marginLeft = 10;
            if (this.shape === 'fab') {
                style.width = 30;
            }
        }

        if (this.fill === 'outline' || this.fill === 'clear') {
            style.backgroundColor = 'transparent';
            style.shadowOpacity = 0;
            if (this.fill === 'clear') {
                style.borderColor = 'transparent';
            }
        }
        if (this.expand !== 'block' && this.expand !== 'full') {
            style.alignSelf = 'flex-start';
            style.paddingLeft = 20;
            style.paddingRight = 20;
        } else if (this.expand === 'full') {
            style.marginLeft = 0;
            style.marginRight = 0;
            style.borderRadius = 0;
        }

        if (this.shape === 'fab') {
            style.borderRadius = 28;
            style.width = 56;
            style.height = 56;
            style.paddingLeft = 0;
            style.paddingRight = 0;
            style.paddingTop = 0;
            style.paddingBottom = 0;
            style.alignItems = 'center';
            style.justifyContent = 'center';
        } else if (this.shape === 'round') {
            style.borderRadius = 22;
        }


        return { ...defaultStyles.buttonStyle, ...style, ...this.buttonStyle };
    }

    _getIconStyle() {
        const style = {
            color: this.color,
            fontSize: 16,
        };

        if (!this.fill || this.fill === 'solid') {
            style.color = getColorContrast(this.color);
        }

        if (this.text && this.icon && this.shape !== 'fab') {

            style[this.iconPosition === 'right' || this.iconPosition === 'end' ? 'marginLeft' : 'marginRight'] = 10;
        }
        return {...style, ...this.iconStyle};
    }

    _getTextStyle() {
        const style = {
            color: !this.fill || this.fill === 'solid' ? getColorContrast(this.color) : this.color
        };

        if (this.expand !== 'inline' && (this.iconPosition === 'end' || this.iconPosition === 'start')) {
            style.flex = 1;
        }
        return { ...defaultStyles.textStyle, ...style, ...this.props.textStyle };
    }
}

const defaultStyles = {
    buttonStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        width: 'auto',
        paddingRight: 10,
        paddingLeft: 10
    },
    textStyle: {
        margin: 0,
        fontSize: 14,
        fontWeight: '500',
    }
};
