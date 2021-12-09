import React, {useMemo} from 'react';
import {Text, View, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

import {Colors, Dimensions} from 'styles';
import locales from '@locales/home';
import {UserAppointment} from 'data/schedule/types';

import styles from './styles';
import useHome from './hooks';
import HomeCard from './components/HomeCard';

interface ListScheduleProps {
  listCooperatorsMap: any;
  listProceduresMap: any;
  listEstablishmentsMap: any;
  listSchedules: any[];
  onScheduleCancel: Function;
}

const status = {
  cancel: 'CANCELADA',
  confirm: 'CONFIRMADA',
  finish: 'FINALIZADA',
};

const NextSchedule = ({
  listCooperatorsMap,
  listProceduresMap,
  listEstablishmentsMap,
  listSchedules,
  onScheduleCancel,
}: ListScheduleProps): JSX.Element | null => {
  const listNext = useMemo((): JSX.Element | null => {
    const list = listSchedules
      .sort((item1: UserAppointment, item2: UserAppointment) => {
        return moment(item1.date).unix() - moment(item2.date).unix();
      })
      .filter((item: UserAppointment) => {
        return (
          moment().unix() < moment(item.date).unix() &&
          item.canceled_at === null
        );
      });
    return list && list.length > 0 ? (
      <View style={styles.containerCard}>
        <Text style={styles.textSchedule}>{locales.nextSchedule}</Text>
        <HomeCard
          status={status.confirm}
          btnText={locales.btnCancel}
          isBtnSchedule={true}
          cooperatorName={
            listCooperatorsMap &&
            listCooperatorsMap[list[0].cooperator_id] &&
            listCooperatorsMap[list[0].cooperator_id].name
          }
          procedureName={
            listProceduresMap[list[0].procedure_id] &&
            listProceduresMap[list[0].procedure_id].name
          }
          address={
            listEstablishmentsMap[
              listCooperatorsMap[list[0].cooperator_id].estab_id
            ].endereco
          }
          date={list[0].date}
          onPress={() => onScheduleCancel(list[0].cooperator_id, list[0].date)}
        />
      </View>
    ) : null;
  }, [
    listCooperatorsMap,
    listEstablishmentsMap,
    listProceduresMap,
    listSchedules,
    onScheduleCancel,
  ]);

  return listNext;
};

const Home = (): JSX.Element => {
  const {
    userName,
    listCooperatorsMap,
    listEstablishmentsMap,
    listProceduresMap,
    listSchedules,
    onScheduleCancel,
  } = useHome();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgRoot}>
        <View style={styles.imgContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            color={Colors.generic.primaryOrange}
            size={Dimensions.size50}
          />
        </View>
      </View>
      <Text style={styles.title}>{locales.welcome}</Text>
      <Text style={styles.title}>{userName}</Text>
      <NextSchedule
        listSchedules={listSchedules}
        listCooperatorsMap={listCooperatorsMap}
        listEstablishmentsMap={listEstablishmentsMap}
        listProceduresMap={listProceduresMap}
        onScheduleCancel={onScheduleCancel}
      />
    </ScrollView>
  );
};

export default Home;
