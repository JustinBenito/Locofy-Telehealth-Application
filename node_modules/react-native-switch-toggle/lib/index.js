import { Animated, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
function SwitchToggle(props) {
    var _a = props.backgroundColorOn, backgroundColorOn = _a === void 0 ? 'black' : _a, _b = props.backgroundColorOff, backgroundColorOff = _b === void 0 ? '#C4C4C4' : _b, _c = props.circleColorOn, circleColorOn = _c === void 0 ? 'white' : _c, _d = props.circleColorOff, circleColorOff = _d === void 0 ? '#6D6D6D' : _d, _e = props.duration, duration = _e === void 0 ? 300 : _e, backgroundImageOn = props.backgroundImageOn, backgroundImageOff = props.backgroundImageOff;
    var animXValue = useState(new Animated.Value(props.switchOn ? 1 : 0))[0];
    var getStart = function () {
        return props.type === undefined
            ? 0
            : props.type === 0
                ? 0
                : props.containerStyle && props.containerStyle.padding
                    ? props.containerStyle.padding * 2
                    : {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var runAnimation = function () {
        var animValue = {
            fromValue: props.switchOn ? 0 : 1,
            toValue: props.switchOn ? 1 : 0,
            duration: duration,
            useNativeDriver: false,
        };
        Animated.timing(animXValue, animValue).start();
    };
    var endPos = props.containerStyle && props.circleStyle
        ? props.containerStyle.width -
            (props.circleStyle.width +
                (props.containerStyle.padding || 0) * 2)
        : 0;
    var circlePosXEnd = props.RTL ? -endPos : endPos;
    var circlePosXStart = useState(getStart())[0];
    var prevSwitchOnRef = useRef();
    var prevSwitchOn = !!prevSwitchOnRef.current;
    useEffect(function () {
        prevSwitchOnRef.current = props.switchOn;
        if (prevSwitchOn !== props.switchOn)
            runAnimation();
    }, [prevSwitchOn, props.switchOn, runAnimation]);
    var generateRightText = function () {
        return (<Animated.View style={props.rightContainerStyle}>
        <Text style={props.textRightStyle}>{props.backTextRight}</Text>
      </Animated.View>);
    };
    var generateLeftText = function () {
        return (<Animated.View style={props.leftContainerStyle}>
        <Text style={props.textLeftStyle}>{props.backTextLeft}</Text>
      </Animated.View>);
    };
    var generateLeftIcon = function () {
        return (<View style={{ position: 'absolute', left: 5 }}>{backgroundImageOn}</View>);
    };
    var generateRightIcon = function () {
        return (<View style={{ position: 'absolute', right: 5 }}>{backgroundImageOff}</View>);
    };
    return (<TouchableOpacity testID={props.testID} onPress={props.onPress} activeOpacity={0.8}>
      <Animated.View style={[
            styles.container,
            props.containerStyle,
            {
                backgroundColor: animXValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                        backgroundColorOff,
                        backgroundColorOn,
                    ],
                }),
            },
        ]}>
        {generateLeftText()}
        {props.switchOn && generateLeftIcon()}
        <Animated.View style={[
            props.circleStyle,
            {
                backgroundColor: animXValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                        circleColorOff,
                        circleColorOn,
                    ],
                }),
            },
            {
                transform: [
                    {
                        translateX: animXValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                circlePosXStart,
                                circlePosXEnd,
                            ],
                        }),
                    },
                ],
            },
            props.buttonStyle,
        ]}>
          <Animated.View style={props.buttonContainerStyle}>
            <Text style={props.buttonTextStyle}>{props.buttonText}</Text>
          </Animated.View>
        </Animated.View>
        {generateRightText()}
        {!props.switchOn && generateRightIcon()}
      </Animated.View>
    </TouchableOpacity>);
}
SwitchToggle.defaultProps = {
    containerStyle: {
        marginTop: 16,
        width: 80,
        height: 40,
        borderRadius: 25,
        padding: 5,
    },
    circleStyle: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
};
export default SwitchToggle;
//# sourceMappingURL=index.js.map