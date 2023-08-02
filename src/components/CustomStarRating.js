import React from 'react';
import {StyleSheet} from 'react-native';
import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
import {useThemeAwareObject} from '../theme';
import {wp} from '../util';

export const CustomStarRating = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      starStyle: {
        marginRight: wp(0),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <StarRating
      maxStars={props.maxStars}
      rating={props.rating}
      starStyle={[styles.starStyle, props.starStyle]}
      starSize={props.starSize ?? wp(4)}
      onChange={props.onChange}
      enableSwiping
      enableHalfStar
    />
  );
};

export const DisplayStarRating = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      starStyle: {
        marginRight: wp(0),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <StarRatingDisplay
      maxStars={props.maxStars}
      rating={props.rating}
      enableHalfStar
      starStyle={[styles.starStyle, props.starStyle]}
      starSize={props.starSize ?? wp(4)}
    />
  );
};
