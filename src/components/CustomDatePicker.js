import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, {useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useThemeAwareObject} from '../theme/index';
import {hp, wp} from '../util';
import Text from './CustomText';

const CustomDatePicker = ({
  onChange,
  type,
  value,
  maxDate,
  minDate,
  customDateView,
  format,
  placeholder,
}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      dateView: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.color.inputBorder,
        borderRadius: theme.borders.radius2,
        paddingHorizontal: wp(3),
        height: hp(6),
        backgroundColor: theme.color.backgroundColor,
        width: wp(90),
      },
      datePlaceholder: {
        color: theme.color.textPlaceholder,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('');
  const [show, setShow] = useState(false);

  const _onChange = (event, value) => {
    if (event.type == 'dismissed') {
      setShow(Platform.OS === 'ios');
    } else {
      const currentDate = value;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      if (mode === 'time') {
        onChange(moment(currentDate));
      }
      if (mode === 'date') {
        onChange(moment(currentDate));
      }
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          type == 'date' ? showDatepicker() : showTimepicker();
        }}>
        <View style={[styles.dateView, customDateView]}>
          <Text style={date == '' && styles.datePlaceholder}>
            {date == '' ? placeholder : format}
          </Text>
        </View>
      </TouchableOpacity>
      {show && Platform.OS != 'ios' && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={false}
          display={'spinner'}
          onChange={_onChange}
          maximumDate={maxDate}
          minimumDate={minDate}
        />
      )}
      {show && Platform.OS == 'ios' && (
        <ReactNativeModal
          isVisible={show}
          onBackButtonPress={() => {
            setShow(false);
          }}
          onBackdropPress={() => {
            setShow(false);
          }}
          onRequestClose={() => {
            setShow(false);
          }}
          hasBackdrop
          backdropOpacity={0.5}
          backdropColor="#000">
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 10,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              paddingBottom: 20,
            }}>
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={'time'}
              is24Hour={false}
              display={'spinner'}
              onChange={_onChange}
              maximumDate={maxDate}
              minimumDate={minDate}
            />
          </View>
        </ReactNativeModal>
      )}
    </>
  );
};

export default CustomDatePicker;
