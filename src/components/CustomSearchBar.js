import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';

function CustomSearchBar(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      searchPlaceholderColor: theme.color.avatarColor,
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <SearchBar
      containerStyle={props.containerStyle}
      inputContainerStyle={props.inputContainerStyle}
      allowFontScaling={false}
      inputStyle={props.inputStyle}
      searchIcon={props.searchIcon}
      clearIcon={true}
      lightTheme
      placeholder={props.placeholder}
      placeholderTextColor={
        props.searchPlaceholderColor ?? styles.searchPlaceholderColor
      }
      returnKeyType={props.keyType ?? 'default'}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
      onClear={props.onClear}
      value={props.value}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
}

export default CustomSearchBar;
