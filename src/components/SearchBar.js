import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useThemeAwareObject} from '../theme';
import {Image} from 'react-native-elements';

const SearchBar = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      container: {
        height: hp(6),
        width: wp(75),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: theme.borders.radius3,
        backgroundColor: theme.color.inputBorder,
        borderColor: theme.color.textWhite,
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 3},
            shadowOpacity: 0.2,
          },
          android: {
            elevation: 0.5,
          },
        }),

        marginRight: wp(5),
      },
      label: {
        fontSize: hp(3),
      },

      container2: {
        backgroundColor: theme.color.inputBorder,
        borderTopLeftRadius: theme.borders.radius3,
        borderBottomLeftRadius: theme.borders.radius3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp(3),
        marginHorizontal: wp(1),

      },
      container3: {
        backgroundColor: theme.color.inputBorder,
        borderRadius: theme.borders.radius3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: wp(3),
        marginRight: wp(0.5),
      },

      searchText: {
        color: theme.color.textBlack,
        fontSize: hp(1.75),
        fontFamily: theme.family.medium,
      },
      img: {
        width: wp(6),
        height: wp(6),
      },
      leftImg: {
        width: wp(5),
        height: wp(5),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={[styles.container, props.container]}>
      <View style={styles.container2}>
        <Image
          source={require('../../assets/icons/SearchIcon.png')}
          resizeMode="contain"
          style={styles.leftImg}
          onPress={() => {}}
        />

          <TextInput
            style={styles.searchText}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={'gray'}
          />
      </View>

      <View style={styles.container3}>
        <Image
          source={require('../../assets/icons/CloseCircle.png')}
          resizeMode="contain"
          style={styles.img}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default SearchBar;
