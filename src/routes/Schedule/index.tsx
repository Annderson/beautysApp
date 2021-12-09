import React, {useMemo} from 'react';
import {ScrollView, View, Text} from 'react-native';
import moment from 'moment';

import locales from '@locales/schedule';
import {UserAppointment} from '@data/schedule/types';

import styles from './styles';
import useSchedule from './hooks';
import ScheduleCard from './components/ScheduleCard';

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

const PreviousSchedule = ({
  listCooperatorsMap,
  listProceduresMap,
  listEstablishmentsMap,
  listSchedules,
  onScheduleCancel,
}: ListScheduleProps): JSX.Element | null => {
  const listPrevious = useMemo((): JSX.Element | null => {
    const list =
      listCooperatorsMap &&
      listProceduresMap &&
      listEstablishmentsMap &&
      listSchedules
        .sort((item1: UserAppointment, item2: UserAppointment) => {
          return moment(item2.date).unix() - moment(item1.date).unix();
        })
        .filter((item: UserAppointment) => {
          return (
            moment().unix() > moment(item.date).unix() ||
            item.canceled_at !== null
          );
        });
    return list && list.length > 0 ? (
      <View>
        <Text style={styles.title}>{locales.previousSchedule}</Text>
        {list.map((item: UserAppointment) => (
          <ScheduleCard
            status={status.finish}
            key={item.id}
            btnText={locales.btnReSchedule}
            isBtnSchedule={true}
            cooperatorName={listCooperatorsMap[item.cooperator_id].name}
            procedureName={
              listProceduresMap[item.procedure_id] &&
              listProceduresMap[item.procedure_id].name
            }
            address={
              listEstablishmentsMap[
                listCooperatorsMap[item.cooperator_id].estab_id
              ].endereco
            }
            date={item.date}
            onPress={() => onScheduleCancel(item.cooperator_id, item.date)}
          />
        ))}
      </View>
    ) : null;
  }, [
    listCooperatorsMap,
    listEstablishmentsMap,
    listProceduresMap,
    listSchedules,
    onScheduleCancel,
  ]);

  return listPrevious;
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
      <View>
        {list.map((item: UserAppointment) => (
          <ScheduleCard
            key={item.id}
            status={status.confirm}
            btnText={locales.btnCancel}
            isBtnSchedule={true}
            cooperatorName={listCooperatorsMap[item.cooperator_id].name}
            procedureName={
              listProceduresMap[item.procedure_id] &&
              listProceduresMap[item.procedure_id].name
            }
            address={
              listEstablishmentsMap[
                listCooperatorsMap[item.cooperator_id].estab_id
              ].endereco
            }
            date={item.date}
            onPress={() => onScheduleCancel(item.cooperator_id, item.date)}
          />
        ))}
      </View>
    ) : (
      <Text style={styles.textListEmpty}>{locales.listEmpty}</Text>
    );
  }, [
    listCooperatorsMap,
    listEstablishmentsMap,
    listProceduresMap,
    listSchedules,
    onScheduleCancel,
  ]);

  return listNext;
};

const Schedule = (): JSX.Element => {
  const {
    listSchedules,
    listCooperatorsMap,
    listEstablishmentsMap,
    listProceduresMap,
    onScheduleCancel,
    onClickNavigate,
  } = useSchedule();

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator>
      <View style={styles.viewScheduleNext}>
        <Text style={styles.title}>{locales.nextSchedule}</Text>
        <NextSchedule
          listCooperatorsMap={listCooperatorsMap}
          listEstablishmentsMap={listEstablishmentsMap}
          listProceduresMap={listProceduresMap}
          listSchedules={listSchedules}
          onScheduleCancel={onScheduleCancel}
        />
      </View>
      <View style={styles.viewSchedulePrevious}>
        <PreviousSchedule
          listCooperatorsMap={listCooperatorsMap}
          listEstablishmentsMap={listEstablishmentsMap}
          listProceduresMap={listProceduresMap}
          listSchedules={listSchedules}
          onScheduleCancel={onClickNavigate}
        />
      </View>
    </ScrollView>
  );
};

export default Schedule;
