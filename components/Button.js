import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // 5.0.0
import PropTypes from 'prop-types';
import { getColorContrast } from '../utils/getColorContrast';

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
        shape: PropTypes.oneOf(['default', 'round']),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        text: PropTypes.string,
        textStyle: PropTypes.object,
    };

    get color() {
        return this.props.color || '#7044ff';
    }

    get buttonStyle() {
        return this.props.buttonStyle || {};
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
                <MaterialCommunityIcons name={this.icon} style={iconStyle} />
                <Text style={textStyle}>{this.text}</Text>
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
            borderRadius: this.shape === 'round' ? 22 : 2,
            opacity: this.disabled ? 0.6 : 1,
            flexDirection: 'row'
        };

        if (this.iconPosition === 'right' || this.iconPosition === 'end') {
            style.flexDirection = 'row-reverse';
        }

        if (this.size === 'small') {
            style.height = 30;
            style.paddingLeft = 10;
            style.marginLeft = 10
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

        if (this.text && this.icon) {

            style[this.iconPosition === 'right' || this.iconPosition === 'end' ? 'marginLeft' : 'marginRight'] = 10;
        }
        return style;
    }

    _getTextStyle() {
        const style = {
            color: !this.fill || this.fill === 'solid' ? getColorContrast(this.color) : this.color
        }

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
        shadowOpacity: 0.2,
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
