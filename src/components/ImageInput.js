import React, {useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomSheet, ListItem} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {useThemeAwareObject} from '../theme';

const ImageInput = props => {
  const {setUri, style, children = null} = props;
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'Open Camera for Image',
      onPress: () => {
        ImagePicker.openCamera({
          width: 1000,
          height: 1000,
          compressImageMaxHeight: 900,
          compressImageMaxWidth: 900,
          mediaType: 'photo',
        })
          .then(image => {
            let newImageUri = null;
            let obj = {};
            Platform.OS == 'android'
              ? (newImageUri = 'file:/' + image.path.split('file:///').join(''))
              : (newImageUri =
                  'file:/' + image.sourceURL.split('file:///').join(''));
            obj['uri'] = newImageUri;
            obj['type'] = image.mime;
            obj['name'] = newImageUri.split('/').pop();
            setUri(obj);
            setIsVisible(false);
          })
          .catch(setIsVisible(false));
      },
    },
    {
      title: 'Choose Gallery',
      onPress: () =>
        ImagePicker.openPicker({
          width: 1000,
          height: 1000,
          compressImageMaxHeight: 900,
          compressImageMaxWidth: 900,
          mediaType: 'photo',
        })
          .then(image => {
            let newImageUri = null;
            let obj = {};
            Platform.OS == 'android'
              ? (newImageUri = 'file:/' + image.path.split('file:///').join(''))
              : (newImageUri =
                  'file:/' + image.sourceURL.split('file:///').join(''));
            obj['uri'] = newImageUri;
            obj['type'] = image.mime;
            obj['name'] = newImageUri.split('/').pop();
            setUri(obj);
            setIsVisible(false);
          })
          .catch(setIsVisible(false)),
    },
    {
      title: 'Cancel',
      onPress: () => setIsVisible(false),
    },
  ];

  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      containerStyle: {
        backgroundColor: theme.color.bottomSheet,
      },
      titleStyle: {
        alignSelf: 'center',
        color: theme.color.textWhite,
        fontFamily: theme.family.semiBold,
      },
    });
    return themeStyles;
  };

  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <TouchableOpacity onPress={() => setIsVisible(true)} style={style}>
        {children}
      </TouchableOpacity>
      <BottomSheet isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={styles.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title
                style={styles.titleStyle}
                allowFontScaling={false}>
                {l.title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
};

export default ImageInput;
