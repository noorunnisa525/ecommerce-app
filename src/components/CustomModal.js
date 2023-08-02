import React from 'react';
import {StyleSheet} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useThemeAwareObject} from '../theme/index';

const CustomModal = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({});
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return (
    <ReactNativeModal
      isVisible={props.show}
      onBackButtonPress={props.backButton}
      onBackdropPress={props.backDrop}
      onRequestClose={props.requestClose}
      hasBackdrop
      style={props.style}
      backdropOpacity={0.7}
      backdropColor="rgba(0,0,0,1)">
      {props.children}
    </ReactNativeModal>
  );
};

export default CustomModal;
