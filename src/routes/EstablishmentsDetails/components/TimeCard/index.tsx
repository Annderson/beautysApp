import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

import {UserAppointment} from '@data/schedule/types';

import styles from './styles';

interface Props {
  schedules: UserAppointment[];
  onTime: (value: string) => void;
}

const times = [
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

const TimeCard = ({schedules, onTime}: Props): JSX.Element => {
  const [hour, setHour] = useState(times[0]);

  const onHour = useCallback(
    (time: string) => {
      setHour(time);
      onTime(time);
    },
    [onTime],
  );

  useEffect(() => {
    onTime(times[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {times.map((time: string) => {
          let isTime = true;
          schedules.forEach((schedule: UserAppointment) => {
            if (time === moment(schedule.date).format('HH:mm')) {
              isTime = false;
            }
          });
          if (isTime) {
            return (
              <TouchableOpacity
                style={
                  time === hour ? styles.timeCardSelected : styles.timeCard
                }
                onPress={() => onHour(time)}>
                <Text
                  style={
                    time === hour ? styles.textTimeSelected : styles.textTime
                  }>
                  {time}
                </Text>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default TimeCard;
