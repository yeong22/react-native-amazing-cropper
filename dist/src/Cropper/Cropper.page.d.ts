import { Component } from 'react';
import { Animated, PanResponderInstance, PanResponderGestureState } from 'react-native';
declare type CropperPageProps = {
    footerComponent: JSX.Element;
    onDone: (croppedImageUri: string) => void;
    onError: (err: Error) => void;
    onCancel: () => void;
    imageUri: string;
    imageWidth: number;
    imageHeight: number;
    TOP_VALUE: number;
    LEFT_VALUE: number;
    BOTTOM_VALUE: number;
    RIGHT_VALUE: number;
    initialRotation: number;
    NOT_SELECTED_AREA_OPACITY: number;
    BORDER_WIDTH: number;
    COMPONENT_WIDTH: number;
    COMPONENT_HEIGHT: number;
};
interface ExtendedAnimatedValue extends Animated.Value {
    _value: number;
    _offset: number;
}
interface ExtendedAnimatedValueXY extends Animated.AnimatedValueXY {
    x: ExtendedAnimatedValue;
    y: ExtendedAnimatedValue;
}
declare type Position = 'topPosition' | 'leftPosition' | 'bottomPosition' | 'rightPosition';
interface State {
    topOuterPosition: ExtendedAnimatedValueXY;
    topOuterPanResponder: PanResponderInstance;
    leftOuterPosition: ExtendedAnimatedValueXY;
    leftOuterPanResponder: PanResponderInstance;
    bottomOuterPosition: ExtendedAnimatedValueXY;
    bottomOuterPanResponder: PanResponderInstance;
    rightOuterPosition: ExtendedAnimatedValueXY;
    rightOuterPanResponder: PanResponderInstance;
    topPosition: ExtendedAnimatedValueXY;
    topPanResponder: PanResponderInstance;
    leftPosition: ExtendedAnimatedValueXY;
    leftPanResponder: PanResponderInstance;
    bottomPosition: ExtendedAnimatedValueXY;
    bottomPanResponder: PanResponderInstance;
    rightPosition: ExtendedAnimatedValueXY;
    rightPanResponder: PanResponderInstance;
    topLeftPosition: ExtendedAnimatedValueXY;
    topLeftPanResponder: PanResponderInstance;
    bottomLeftPosition: ExtendedAnimatedValueXY;
    bottomLeftPanResponder: PanResponderInstance;
    bottomRightPosition: ExtendedAnimatedValueXY;
    bottomRightPanResponder: PanResponderInstance;
    topRightPosition: ExtendedAnimatedValueXY;
    topRightPanResponder: PanResponderInstance;
    rectanglePosition: ExtendedAnimatedValueXY;
    rectanglePanResponder: PanResponderInstance;
    TOP_LIMIT: number;
    LEFT_LIMIT: number;
    BOTTOM_LIMIT: number;
    RIGHT_LIMIT: number;
    TOP_VALUE: number;
    LEFT_VALUE: number;
    BOTTOM_VALUE: number;
    RIGHT_VALUE: number;
    rotation: number;
}
declare class CropperPage extends Component<CropperPageProps, State> {
    constructor(props: CropperPageProps);
    isRectangleMoving: boolean;
    topOuter: undefined;
    leftOuter: undefined;
    bottomOuter: undefined;
    rightOuter: undefined;
    W: number;
    H: number;
    onCancel: () => void;
    getTopOuterStyle: () => {
        top: number;
        left: number;
        height: Animated.AnimatedAddition;
        width: number;
        backgroundColor: string;
    };
    getLeftOuterStyle: () => {
        top: Animated.AnimatedAddition;
        left: number;
        height: Animated.AnimatedAddition;
        width: Animated.AnimatedAddition;
        backgroundColor: string;
    };
    getBottomOuterStyle: () => {
        top: ExtendedAnimatedValue;
        left: number;
        height: Animated.AnimatedAddition;
        width: number;
        backgroundColor: string;
    };
    getRightOuterStyle: () => {
        top: Animated.AnimatedAddition;
        left: ExtendedAnimatedValue;
        height: Animated.AnimatedAddition;
        right: number;
        backgroundColor: string;
    };
    getTopLeftStyle: () => {
        top: ExtendedAnimatedValue;
        left: ExtendedAnimatedValue;
        width: number;
        paddingBottom: number;
    };
    getBottomLeftStyle: () => {
        top: ExtendedAnimatedValue;
        left: ExtendedAnimatedValue;
        width: number;
        paddingTop: number;
    };
    getBottomRightStyle: () => {
        top: ExtendedAnimatedValue;
        left: ExtendedAnimatedValue;
        height: number;
        paddingLeft: number;
    };
    getTopRightStyle: () => {
        top: ExtendedAnimatedValue;
        left: ExtendedAnimatedValue;
        height: number;
        paddingLeft: number;
    };
    getTopSideStyle: () => {
        left: Animated.AnimatedAddition;
        width: Animated.AnimatedAddition;
        paddingBottom: number;
    };
    getLeftSideStyle: () => {
        top: Animated.AnimatedAddition;
        height: Animated.AnimatedAddition;
        paddingLeft: number;
    };
    getBottomSideStyle: () => {
        left: Animated.AnimatedAddition;
        width: Animated.AnimatedAddition;
        paddingTop: number;
    };
    getRightSideStyle: () => {
        top: Animated.AnimatedAddition;
        height: Animated.AnimatedAddition;
        paddingLeft: number;
    };
    getRectangleStyle: () => {
        top: Animated.AnimatedAddition;
        left: Animated.AnimatedAddition;
        width: Animated.AnimatedAddition;
        height: Animated.AnimatedAddition;
        zIndex: number;
    };
    getImageStyle: () => {
        position: string;
        top: number;
        left: number;
        bottom: number;
        right: number;
        resizeMode: string;
        transform: {
            rotate: string;
        }[];
    };
    isAllowedToMoveTopSide: (gesture: PanResponderGestureState) => boolean;
    isAllowedToMoveLeftSide: (gesture: PanResponderGestureState) => boolean;
    isAllowedToMoveBottomSide: (gesture: PanResponderGestureState) => boolean;
    isAllowedToMoveRightSide: (gesture: PanResponderGestureState) => boolean;
    isAllowedToMove: (position: Position, gesture: PanResponderGestureState) => boolean | undefined;
    initSidePanResponder: (position: Position) => PanResponderInstance;
    initRectanglePanResponder: () => PanResponderInstance;
    initCornerPanResponder: (pos1: Position, pos2: Position) => PanResponderInstance;
    setCropBoxLimits: ({ TOP_LIMIT, LEFT_LIMIT, BOTTOM_LIMIT, RIGHT_LIMIT, }: {
        TOP_LIMIT: number;
        LEFT_LIMIT: number;
        BOTTOM_LIMIT: number;
        RIGHT_LIMIT: number;
    }) => void;
    setCropBoxValues: ({ TOP_VALUE, LEFT_VALUE, BOTTOM_VALUE, RIGHT_VALUE, }: {
        TOP_VALUE: number;
        LEFT_VALUE: number;
        BOTTOM_VALUE: number;
        RIGHT_VALUE: number;
    }) => void;
    setCropBoxRotation: (rotation: number) => void;
    rotate90: () => void;
    onRotate: () => void;
    onDone: () => null | undefined;
    render(): JSX.Element;
}
export default CropperPage;
