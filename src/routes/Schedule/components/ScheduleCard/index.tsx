import React from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';

import Button, {Variant} from '@components/Button';

import styles from './styles';

const status = {
  cancel: 'CANCELADA',
  confirm: 'CONFIRMADA',
  finish: 'FINALIZADA',
};

interface Props {
  address?: string;
  btnText: string;
  cooperatorName?: string;
  date?: Date;
  isBtnSchedule?: boolean;
  procedureName?: string;
  onPress: () => void;
}

const ScheduleCard = ({
  btnText,
  cooperatorName,
  date,
  isBtnSchedule,
  procedureName,
  address,
  onPress,
}: Props): JSX.Element => {
  /*
  if (date) {
    console.log('date  ', moment(date).format('lll'));
    console.log(
      'date 2 ',
      moment().format('lll') >
        moment('2021-11-28T15:38:03-03:00').format('lll'),
    );
    console.log('moment  ', moment().format() > moment(date).format());
  }
*/
  return (
    <View style={styles.root}>
      <View style={styles.viewInfo}>
        <Text style={styles.statusFinishText}>{status.confirm}</Text>
        <Text style={styles.title}>{procedureName}</Text>
        <Text style={styles.subText2}>{cooperatorName}</Text>
        <Text style={styles.subText3}>{address}</Text>
        <View>
          {isBtnSchedule && (
            <Button
              variant={Variant.BlueBackground}
              title={btnText}
              onPress={onPress}
            />
          )}
        </View>
      </View>
      <View style={styles.separate} />
      <View style={styles.viewDate}>
        <Text style={styles.dayText}>{moment(date).format('DD [de] MMM')}</Text>
        <Text style={styles.subText2}>{moment(date).format('HH:mm')}</Text>
      </View>
    </View>
  );
};

export default ScheduleCard;
