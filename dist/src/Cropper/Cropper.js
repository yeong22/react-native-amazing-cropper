import React from 'react';
import { View, Animated, Image } from 'react-native';
import getStyles from './Cropper.style';
const Cropper = (props) => {
    const styles = getStyles(props.COMPONENT_WIDTH, props.COMPONENT_HEIGHT, props.W);
    return (<View style={styles.container}>
      <View style={styles.secondContainer}>
        <Image style={props.getImageStyle()} source={{ uri: props.imageUri }}/>
      </View>

      <View style={[styles.footerContainer, { top: 0 }]}>
        {React.cloneElement(props.footerComponent, {
            onDone: props.onDone,
            onRotate: props.onRotate,
            onCancel: props.onCancel,
        })}
      </View>
      {/*
          // @ts-ignore */}
      <Animated.View ref={props.topOuterRef} style={[styles.animation, props.getTopOuterStyle()]} {...props.topOuterPanResponder.panHandlers}/>
      {/*
          // @ts-ignore */}
      <Animated.View ref={props.leftOuterRef} style={[styles.animation, props.getLeftOuterStyle()]} {...props.leftOuterPanResponder.panHandlers}/>
      {/*
          // @ts-ignore */
        /* eslint-disable-line */
        /* eslint-disable-next-line prettier/prettier */ }
      <Animated.View ref={props.bottomOuterRef} style={[styles.animation, props.getBottomOuterStyle()]} {...props.bottomOuterPanResponder.panHandlers}/>
      {/*
          // @ts-ignore */}
      <Animated.View ref={props.rightOuterRef} style={[styles.animation, props.getRightOuterStyle()]} {...props.rightOuterPanResponder.panHandlers}/>

      <Animated.View style={[styles.animation, styles.topSideAnimation, props.getTopSideStyle()]} {...props.topPanResponder.panHandlers}/>
      <Animated.View style={[styles.animation, styles.leftSideAnimation, props.getLeftSideStyle()]} {...props.leftPanResponder.panHandlers}/>
      <Animated.View style={[styles.animation, styles.bottomSideAnimation, props.getBottomSideStyle()]} {...props.bottomPanResponder.panHandlers}/>
      <Animated.View style={[styles.animation, styles.rightSideAnimation, props.getRightSideStyle()]} {...props.rightPanResponder.panHandlers}/>

      <Animated.View style={[styles.animation, styles.topLeftAnimation, props.getTopLeftStyle()]} {...props.topLeftPanResponder.panHandlers}/>
      {/* eslint-disable-next-line prettier/prettier */}
      <Animated.View style={[styles.animation, styles.bottomLeftAnimation, props.getBottomLeftStyle()]} {...props.bottomLeftPanResponder.panHandlers}/>
      {/* eslint-disable-next-line prettier/prettier */}
      <Animated.View style={[styles.animation, styles.bottomRightAnimation, props.getBottomRightStyle()]} {...props.bottomRightPanResponder.panHandlers}/>
      <Animated.View style={[styles.animation, styles.topRightAnimation, props.getTopRightStyle()]} {...props.topRightPanResponder.panHandlers}/>

      <Animated.View style={[styles.animation, props.getRectangleStyle()]} {...props.rectanglePanResponder.panHandlers}>
        <View style={styles.gridRow}>
          <View style={styles.gridColumn}>
            <View style={[styles.borderDesign, { borderLeftWidth: 3, borderTopWidth: 3 }]}/>
          </View>
          <View style={styles.gridColumn}>
            <View style={[styles.borderDesign, { borderTopWidth: 3, alignSelf: 'center' }]}/>
          </View>
          <View style={styles.gridColumn}>
            <View style={[styles.borderDesign, { borderTopWidth: 3, borderRightWidth: 3, alignSelf: 'flex-end' }]}/>
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={[styles.gridColumn, { flexDirection: 'row' }]}>
            <View style={[styles.borderDesign, { borderLeftWidth: 3, alignSelf: 'center' }]}/>
          </View>
          <View style={styles.gridColumn}/>
          <View style={[styles.gridColumn, { justifyContent: 'center' }]}>
            <View style={[styles.borderDesign, { borderRightWidth: 3, alignSelf: 'flex-end' }]}/>
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={[styles.gridColumn, { justifyContent: 'flex-end' }]}>
            <View style={[styles.borderDesign, { borderLeftWidth: 3, borderBottomWidth: 3 }]}/>
          </View>
          <View style={[styles.gridColumn, { justifyContent: 'flex-end' }]}>
            <View style={[styles.borderDesign, { borderBottomWidth: 3, alignSelf: 'center' }]}/>
          </View>
          <View style={[styles.gridColumn, { justifyContent: 'flex-end' }]}>
            <View style={[
            styles.borderDesign,
            {
                borderRightWidth: 3,
                borderBottomWidth: 3,
                alignSelf: 'flex-end',
            },
        ]}/>
          </View>
        </View>
      </Animated.View>
    </View>);
};
export default Cropper;
