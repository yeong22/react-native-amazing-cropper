import { Component } from 'react';
export declare type AmazingCropperProps = {
    footerComponent?: JSX.Element;
    onDone: (croppedImageUri: string) => void;
    onError: (err: Error) => void;
    onCancel: () => void;
    imageUri: string;
    imageWidth: number;
    imageHeight: number;
    TOP_VALUE?: number;
    LEFT_VALUE?: number;
    BOTTOM_VALUE?: number;
    RIGHT_VALUE?: number;
    initialRotation?: number;
    NOT_SELECTED_AREA_OPACITY?: number;
    BORDER_WIDTH?: number;
    COMPONENT_WIDTH?: number;
    COMPONENT_HEIGHT?: number;
} & typeof defaultProps;
declare const defaultProps: {
    footerComponent: JSX.Element;
    onDone: (_croppedImageUri: string) => void;
    onError: (_err: Error) => void;
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
declare class Main extends Component<AmazingCropperProps> {
    static defaultProps: {
        footerComponent: JSX.Element;
        onDone: (_croppedImageUri: string) => void;
        onError: (_err: Error) => void;
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
    render(): JSX.Element;
}
export default Main;
