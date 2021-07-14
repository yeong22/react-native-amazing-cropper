export default function getStyles(COMPONENT_WIDTH: number, COMPONENT_HEIGHT: number, W: number): {
    container: {
        flex: number;
        flexDirection: "column";
        alignItems: "center";
        justifyContent: "center";
        backgroundColor: string;
    };
    secondContainer: {
        position: "absolute";
        top: number;
        left: number;
        width: number;
        height: number;
    };
    footerContainer: {
        position: "absolute";
        top: number;
        height: number;
        width: number;
    };
    gridRow: {
        flex: number;
        flexDirection: "row";
    };
    gridColumn: {
        flex: number;
        borderWidth: number;
        borderColor: string;
    };
    animation: {
        position: "absolute";
        backgroundColor: string;
    };
    topSideAnimation: {
        borderBottomWidth: number;
        borderColor: string;
        zIndex: number;
    };
    leftSideAnimation: {
        borderRightWidth: number;
        borderColor: string;
        zIndex: number;
    };
    bottomSideAnimation: {
        borderTopWidth: number;
        borderColor: string;
        zIndex: number;
        transform: {
            translateY: number;
        }[];
    };
    rightSideAnimation: {
        borderLeftWidth: number;
        borderColor: string;
        zIndex: number;
        transform: {
            translateX: number;
        }[];
    };
    topLeftAnimation: {
        borderLeftWidth: number;
        borderRightWidth: number;
        borderTopWidth: number;
        borderColor: string;
        zIndex: number;
    };
    bottomLeftAnimation: {
        borderLeftWidth: number;
        borderRightWidth: number;
        borderBottomWidth: number;
        borderColor: string;
        zIndex: number;
        transform: {
            translateY: number;
        }[];
    };
    bottomRightAnimation: {
        borderTopWidth: number;
        borderRightWidth: number;
        borderBottomWidth: number;
        borderColor: string;
        zIndex: number;
        transform: ({
            translateX: number;
            translateY?: undefined;
        } | {
            translateY: number;
            translateX?: undefined;
        })[];
    };
    topRightAnimation: {
        borderColor: string;
        borderTopWidth: number;
        borderRightWidth: number;
        borderBottomWidth: number;
        zIndex: number;
        transform: {
            translateX: number;
        }[];
    };
    borderDesign: {
        width: number;
        height: number;
        borderColor: string;
    };
    icon: {
        paddingRight: number;
        flexDirection: "row";
    };
    zoomNavBar: {
        width: string;
        height: number;
        backgroundColor: string;
        alignItems: "center";
        position: "absolute";
        flexDirection: "row";
        justifyContent: "space-between";
        bottom: number;
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
        paddingHorizontal: number;
    };
    rightNav: {
        flexDirection: "row";
    };
};
