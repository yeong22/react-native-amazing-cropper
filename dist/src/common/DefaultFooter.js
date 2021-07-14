import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const DefaultFooter = props => (<View style={styles.buttonsContainer}>
    <TouchableOpacity onPress={props.onCancel} style={styles.touchable}>
      <Text style={styles.text}>{props.cancelText}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onRotate} style={styles.touchable}>
      <Text style={styles.text}>{props.rotateText}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onDone} style={styles.touchable}>
      <Text style={styles.text}>{props.doneText}</Text>
    </TouchableOpacity>
  </View>);
export { DefaultFooter };
const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    touchable: {
        padding: 10,
    },
});
