import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {wp} from '../util';

function CustomHeader(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      statusBar: {
        backgroundColor: theme.color.backgroundColor,
      },
      backgroundColor: theme.color.backgroundColor,
      containerStyle: {
        color: theme.color.backgroundColor,
        borderBottomColor: 'transparent',
      },
      sideContainerStyle: {
        marginHorizontal: wp(2),
        justifyContent: 'center',
      },
      centerContainerStyle: {
        justifyContent: 'center',
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Header
      statusBarProps={props.statusbar ?? styles.statusBar}
      barStyle={props.barStyle ?? 'dark-content'}
      placement={props.placement ?? 'center'}
      leftComponent={props.leftComponent}
      centerComponent={({allowFontScaling: false}, props.centerComponent)}
      rightComponent={props.rightComponent}
      backgroundColor={props.backgroundColor ?? styles.backgroundColor}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      centerContainerStyle={[
        styles.centerContainerStyle,
        props.centerContainerStyle,
      ]}
      leftContainerStyle={[styles.sideContainerStyle, props.leftContainerStyle]}
      rightContainerStyle={[
        styles.sideContainerStyle,
        props.rightContainerStyle,
      ]}
    />
  );
}

export default CustomHeader;
