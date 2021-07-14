import React from 'react';
export declare type DefaultFooterProps = {
    onDone?: () => any;
    onRotate?: () => any;
    onCancel?: () => any;
    doneText: string;
    rotateText: string;
    cancelText: string;
};
declare const DefaultFooter: React.FC<DefaultFooterProps>;
export { DefaultFooter };
