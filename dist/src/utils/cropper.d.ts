declare function getCropperLimits(imageWidth: number, imageHeight: number, rotation: number, W_INT: number, H_INT: number, W: number, H: number, BW: number, Q: number): {
    TOP_LIMIT: number;
    LEFT_LIMIT: number;
    BOTTOM_LIMIT: number;
    RIGHT_LIMIT: number;
    DIFF: number;
};
export { getCropperLimits };
