import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Text from './CustomText';

const CustomInputField = ({
  placeholder,
  onChangeText,
  onChange,
  value,
  leftIcon,
  rightIcon,
  onBlur,
  secureTextEntry,
  keyboardType,
  editable,
  multiline,
  maxLength,
  style,
  containerStyle,
  inputContainerStyle,
  onPress,
  numberOfLines,
  inputStyle,
  onFocus,
  error,
  errorStyle,
}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      inputContainer: {
        borderWidth: 1,
        borderColor: theme.color.inputBorder,
        borderRadius: theme.borders.radius2,
        paddingHorizontal: wp(3),
        height: hp(6),
        backgroundColor: theme.color.backgroundColor,
      },
      textStyle: {
        fontSize: theme.size.xSmall,
        fontFamily: theme.family.regular,
        color: theme.color.textBlack,
      },
      containerStyle: {
        height: hp(6),
        marginVertical: hp(0.5),
        paddingHorizontal: 0,
      },
      focusedField: {
        borderColor: theme.color.activeInput,
      },
      errorText: {
        color: theme.color.textRed,
        paddingHorizontal: wp(1),
      },
      placeholderColor: theme.color.textPlaceholder,
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [focused, setFocused] = useState(false);
  return (
    <View>
      <Input
        inputStyle={inputStyle}
        containerStyle={[styles.containerStyle, containerStyle]}
        onPress={onPress}
        inputContainerStyle={[
          styles.inputContainer,
          focused && styles.focusedField,
          inputContainerStyle,
        ]}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        secureTextEntry={secureTextEntry}
        editable={editable}
        multiline={multiline}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        placeholderTextColor={styles.placeholderColor}
        style={[styles.textStyle, style]}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onChange={onChange}
        onBlur={() => {
          setFocused(false);
          onBlur();
        }}
        onFocus={() => {
          setFocused(true);
        }}
        value={value}
        keyboardType={keyboardType}
      />
      <Text style={[styles.errorText, errorStyle]}>{error}</Text>
    </View>
  );
};

export default CustomInputField;
