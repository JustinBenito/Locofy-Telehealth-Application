import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
interface Props {
    testID?: string;
    switchOn: boolean;
    onPress: () => void;
    containerStyle?: ViewStyle;
    circleStyle?: ViewStyle;
    backgroundColorOn?: string;
    backgroundColorOff?: string;
    backgroundImageOn?: React.ReactElement;
    backgroundImageOff?: React.ReactElement;
    circleColorOff?: string;
    circleColorOn?: string;
    duration?: number;
    type?: number;
    buttonText?: string;
    backTextRight?: string;
    backTextLeft?: string;
    buttonTextStyle?: StyleProp<TextStyle>;
    textRightStyle?: StyleProp<TextStyle>;
    textLeftStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonContainerStyle?: StyleProp<ViewStyle>;
    rightContainerStyle?: StyleProp<ViewStyle>;
    leftContainerStyle?: StyleProp<ViewStyle>;
    RTL?: boolean;
}
declare function SwitchToggle(props: Props): React.ReactElement;
declare namespace SwitchToggle {
    var defaultProps: {
        containerStyle: {
            marginTop: number;
            width: number;
            height: number;
            borderRadius: number;
            padding: number;
        };
        circleStyle: {
            width: number;
            height: number;
            borderRadius: number;
        };
    };
}
export default SwitchToggle;
