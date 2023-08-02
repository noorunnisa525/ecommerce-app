import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import Avatar from './CustomAvatar';
import Text from './CustomText';

function CustomReview(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      mainContainer: {},
      topView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      nameView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(58),
        marginBottom: hp(0.5),
      },
      ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatarStyle: {
        marginRight: wp(3),
      },
      avatarSize: wp(14),
      starSize: {
        height: wp(3),
        width: wp(3),
      },
      nameText: {
        color: theme.color.textDarkBlue,
        fontSize: theme.size.small,
        fontFamily: theme.family.medium,
      },
      ratingText: {
        color: theme.color.textDarkBlue,
        fontFamily: theme.family.medium,
        marginLeft: wp(1),
      },
      descriptionText: {
        color: theme.color.textDarkBlue,
        fontFamily: theme.family.semiBold,
      },
      timeText: {
        color: theme.color.textGray,
      },
      sizeText: {
        marginVertical: hp(1.5),
        alignSelf: 'flex-start',
        paddingVertical: wp(1.5),
        paddingHorizontal: wp(3),
        backgroundColor: theme.color.avatarColor,
        color: theme.color.textGray,
        borderRadius: theme.borders.radius1,
      },
    });
    return themeStyles;
  };

  const [like, setLike] = useState(props.like);
  const [likeSelect, setSelectLike] = useState(false);
  const [unlikeSelect, setSelectUnlike] = useState(false);

  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <View style={styles.nameView}>
          <Avatar
            size={styles.avatarSize}
            avatarContainer={styles.avatarStyle}
          />
          <View>
            <Text style={styles.nameText}>{props.name}</Text>
            <View style={styles.ratingView}>
              <Image
                source={require('../../assets/icons/FullStar.png')}
                style={styles.starSize}
                resizeMode="contain"
              />
              <Text style={styles.ratingText}>
                {parseFloat(props.rating).toFixed(1)}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.timeText}>{props.time}</Text>
      </View>
      <Text numberOfLines={3} style={styles.descriptionText}>
        {props.description}
      </Text>
      <Text style={styles.sizeText}>Size bought: {props.size}</Text>
    </View>
  );
}

export default CustomReview;
