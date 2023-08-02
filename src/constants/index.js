import {wp, hp} from '../util/index';

export const colors = {
  blueCola: '#018AEC',
  eerieBlack: '#1C1C1C',
  davyGray: '#5D5D5D',
  davyGrayOpacity: '#5D5D5D80',
  chineseSilver: '#F0F0F0',
  white: '#FFF',
  spaceCadet: '#172B4D',
  deepPink: '#F32C31',
  lightSilver: '#D9D9D9',
  platinum: '#E7E7E7',
  pearlAqua: '#7ECABE',
  bubble: '#E6F3FD',
  honeyDew: '#E7FAEA',
  linen: '#FAE7EA',
  lightGray:'#F5F5F5',
steelGray:'#F7F5F4'};

export const fontsSize = {
  extraSmall: hp(1.5),
  small: hp(1.8),
  medium: hp(2.4),
  large: hp(3),
  extraLarge: hp(4),
};

export const borders = {
  buttonBorder: 10,
  inputRadius: 15,
  circleRadius: 90,
  headerRadius: 40,
};

export const fonts = {
  fontFamilyBold: 'Poppins-Bold',
  fontFamilyLight: 'Poppins-Light',
  fontFamilyMedium: 'Poppins-Medium',
  fontFamilySemiBold: 'Poppins-SemiBold',
  fontFamilyRegular: 'Poppins-Regular',
};
export const baseUrl = {
  base: '',
};

export const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];
