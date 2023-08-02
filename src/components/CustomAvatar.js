import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';

function CustomAvatar(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      avatarContainer: {
        backgroundColor: theme.color.avatarColor,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return props.image == null ? (
    <Avatar
      icon={{name: 'user', type: 'font-awesome'}}
      size={props.size}
      rounded
      containerStyle={[styles.avatarContainer, props.avatarContainer]}
    />
  ) : (
    <Avatar
      source={{uri: props.image}}
      rounded
      size={props.size}
      containerStyle={[styles.avatarContainer, props.avatarContainer]}
    />
  );
}

export default CustomAvatar;
