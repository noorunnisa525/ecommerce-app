import {borders, colors, fontsSize, fonts} from '../constants/index';

const DEFAULT_DARK_COLOR_THEME = {
  backgroundColor: colors.white,
  textGray: colors.davyGray,
  textBlack: colors.eerieBlack,
  textRed: colors.deepPink,
  textBlue: colors.blueCola,
  textDarkBlue: colors.spaceCadet,
  textWhite: colors.white,
  textGreen: colors.pearlAqua,
  textLightGray: colors.chineseSilver,
  textPlaceholder: colors.davyGrayOpacity,
  avatarColor: colors.lightSilver,
  dividerColor: colors.platinum,
  shadowColor: colors.davyGray,
  inputBorder: colors.chineseSilver,
  activeInput: colors.blueCola,
  primaryButton: colors.eerieBlack,
  secondaryButton: colors.davyGray,
  tertiaryButton: colors.deepPink,
  checkColor: colors.blueCola,
  snackSuccess: colors.pearlAqua,
  snackError: colors.deepPink,
  disableSwitch: colors.chineseSilver,
  enableSwitch: colors.blueCola,
  bottomSheet: colors.blueCola,
  process: colors.bubble,
  complete: colors.honeyDew,
  cancel: colors.linen,
};

const FONT_SET = {
  size: {
    xSmall: fontsSize.extraSmall,
    small: fontsSize.small,
    medium: fontsSize.medium,
    large: fontsSize.large,
    xLarge: fontsSize.extraLarge,
  },
};

const FONT_FAMILY = {
  light: fonts.fontFamilyLight,
  bold: fonts.fontFamilyBold,
  semiBold: fonts.fontFamilySemiBold,
  medium: fonts.fontFamilyMedium,
  regular: fonts.fontFamilyRegular,
};

const BORDER_RADIUS = {
  radius1: borders.buttonBorder,
  radius2: borders.inputRadius,
  radius3: borders.headerRadius,
  radius4: borders.circleRadius,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
  family: FONT_FAMILY,
};
