import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Text from './CustomText';

const CELL_COUNT = 4;

const CodeVerification = ({verifyCode, props}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {
        width: wp(90),
      },
      cell: {
        width: hp(8),
        height: hp(8),
        lineHeight: hp(8),
        fontSize: theme.size.xLarge,
        borderWidth: 1,
        borderRadius: theme.borders.radius2,
        borderColor: theme.color.inputBorder,
        textAlign: 'center',
      },
      focusCell: {
        borderColor: theme.color.activeInput,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  return (
    <View style={styles.mainContainer}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={input => {
          setValue(input);
          verifyCode(input);
        }}
        cellCount={CELL_COUNT}
        keyboardType={'number-pad'}
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}>
            {symbol || (isFocused ? <Cursor cursorSymbol="_" /> : null)}
          </Text>
        )}
      />
    </View>
  );
};

export default CodeVerification;
