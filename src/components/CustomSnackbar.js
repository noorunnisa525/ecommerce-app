import Snackbar from 'react-native-snackbar';
import {colors} from '../constants';

export default function (message, status, long) {
  Snackbar.show({
    text: message,
    textColor: colors.white,
    duration: long ? Snackbar.LENGTH_LONG : Snackbar.LENGTH_SHORT,
    backgroundColor: status ? status : colors.deepPink,
  });
}
