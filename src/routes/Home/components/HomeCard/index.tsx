import React from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';

import Button, {Variant} from '@components/Button';

import styles from './styles';

interface Props {
  status: string;
  address?: string;
  btnText: string;
  cooperatorName?: string;
  date?: Date;
  isBtnSchedule?: boolean;
  procedureName?: string;
  onPress: () => void;
}

const statusMap = {
  cancel: 'CANCELADA',
  confirm: 'CONFIRMADA',
  finish: 'FINALIZADA',
};

const ScheduleCard = ({
  btnText,
  status,
  cooperatorName,
  date,
  isBtnSchedule,
  procedureName,
  address,
  onPress,
}: Props): JSX.Element => {
  return (
    <View style={styles.root}>
      <View style={styles.viewInfo}>
        <Text
          style={
            status === statusMap.confirm
              ? styles.statusFinishText
              : styles.statusCancelText
          }>
          {status}
        </Text>
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
