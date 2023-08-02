import React from 'react';
import {View} from 'react-native';
import Review from '../../../../components/CustomReview';
import Text from '../../../../components/CustomText';
import {useThemeAwareObject} from '../../../../theme/index';
import createStyles from './styles';

function Reviews() {
  const styles = useThemeAwareObject(createStyles);

  const reviews = [
    {
      name: 'Joan Perkins',
      rating: 5,
      timeAgo: '1 day ago',
      description:
        'Its a really cute skirt! I didnt expect to feel so good in a polyester material. The print is slightly less bright than what is shown in the product description.',
      size: 'M',
    },
    {
      name: 'John Cena',
      rating: 4.5,
      timeAgo: '3 day ago',
      description:
        'Its a really cute skirt! I didnt expect to feel so good in a polyester material. The print is slightly less bright than what is shown in the product description.',
      size: 'M',
    },
    {
      name: 'Joan Perkins',
      rating: 5,
      timeAgo: '1 day ago',
      description:
        'Its a really cute skirt! I didnt expect to feel so good in a polyester material. The print is slightly less bright than what is shown in the product description.',
      size: 'M',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.customerText}>
          Customer Reviews ({reviews.length})
        </Text>
        <Text style={styles.allText}>All Reviews</Text>
      </View>
      {reviews.slice(0, 2).map(item => (
        <Review
          name={item.name}
          rating={item.rating}
          time={item.timeAgo}
          description={item.description}
          size={item.size}
        />
      ))}
    </View>
  );
}

export default Reviews;
