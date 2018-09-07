import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyledText} from "./StyledText";

export class QuizTypeItem extends React.PureComponent {
    render() {
        const { type: item } = this.props;
        const { container, iconContainer, icon, textContainer, title, description, countContainer, count } = styles(item.color);
        return (
            <TouchableOpacity style={container}>
                <View style={iconContainer}>
                    <MaterialCommunityIcons name={item.icon} style={icon} />
                </View>
                <View style={textContainer}>
                    <StyledText numberOfLines={1} style={title}>{item.title}</StyledText>
                    <StyledText style={description}>{item.description}</StyledText>
                </View>
                <View style={countContainer}>
                    <StyledText style={count}>{item.count}</StyledText>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = (color = Colors.tintColor) => ({
    container: {
        backgroundColor: '#ffffff',
        marginTop: 5,
        marginBottom: 5,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        shadowColor: color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 1,
    },
    icon: {
        color: color,
        fontSize: 20
    },
    title: {
        color: Colors.textColor,
        fontSize: 16
    },
    description: {
        marginTop: 10,
        color: Colors.textColor,
        opacity: 0.7
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    textContainer: {
        overflow: 'hidden',
        flex: 1
    },
    countContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    count: {
        height: 25,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 15,
        backgroundColor: color,
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 30,
        overflow: 'hidden',
        borderRadius: 12
    }
});