import React from 'react';
import {StyleSheet, View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';

const CustomRadioButton = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        marginTop: hp(2),
        marginBottom: hp(0.5),
      },
      labelColor: theme.color.textGray,
      buttonColor: theme.color.secondaryButton,
      selectedButtonColor: theme.color.activeInput,
      radioStyle: {
        width: wp(55),
        justifyContent: 'space-between',
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.mainContainer}>
      <RadioForm
        formHorizontal={true}
        labelHorizontal={true}
        buttonColor={styles.buttonColor}
        selectedButtonColor={styles.selectedButtonColor}
        animation={true}
        buttonSize={wp(2.5)}
        labelColor={styles.labelColor}
        buttonOuterSize={wp(5)}
        radio_props={props.options}
        style={[styles.radioStyle, props.radioStyle]}
        initial={-1}
        onPress={props.setChosenOption}
      />
    </View>
  );
};

export default CustomRadioButton;
