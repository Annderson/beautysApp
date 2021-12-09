import {useEffect, useCallback, useState} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {Cooperator} from '@data/cooperator/types';
import {UserAppointment} from '@data/schedule/types';
import {Actions} from '@data/schedule/action';
import {
  Actions as NotificationActions,
  TypeNotification,
} from '@data/notification';
import locales from '@locales/schedule';

import routesName from '@routes/index';

interface Props {
  onBackNavigate(): void;
  cooperator: Cooperator | undefined;
  schedules: UserAppointment[];
  listProceduresMap: any;
  listEstablishmentsMap: any;
  onDateSelected(value: string): void;
  onScheduleDate(): void;
  setTime(value: string): void;
  date: string;
}

const useEstablishmentsDetails = ({navigation}: any): Props => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const {establishmentsMap} = useSelector((state: any) => state.establishment);
  const {cooperatorsMap} = useSelector((state: any) => state.cooperator);
  const {proceduresMap} = useSelector((state: any) => state.procedure);
  const {cooperatorsSchedule} = useSelector((state: any) => state.schedule);
  const {userInfo} = useSelector((state: any) => state.user);

  const [listProceduresMap, setListProceduresMap] = useState<any>();
  const [cooperator, setCooperator] = useState<Cooperator>();
  const [schedules, setSchedules] = useState<UserAppointment[]>([]);
  const [listEstablishmentsMap, setListEstablishmentsMap] = useState<any>();
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const {params} = navigation.state;

  const onScheduleDate = useCallback(() => {
    const mon = moment(date + time, 'DD/MM/YYYY HH:mm');

    if (!time) {
      dispatch(
        NotificationActions.showNotification({
          title: locales.error,
          type: TypeNotification.error,
          message: locales.actions.errorTimeSchedule,
        }),
      );
      return;
    }

    dispatch(
      Actions.postMakeSchedule({
        user_id: userInfo.id,
        cooperator_id: cooperator?.id || '',
        procedure_id: cooperator?.procedure_id || '',
        date: mon.toISOString(),
      }),
    );
  }, [
    cooperator?.id,
    cooperator?.procedure_id,
    date,
    dispatch,
    time,
    userInfo.id,
  ]);

  const onBackNavigate = useCallback(() => {
    navigate(routesName.Tabs);
  }, [navigate]);

  const onCooperatorsSchedule = useCallback(
    (day: number, month: number, year: number) => {
      dispatch(
        Actions.getCooperatorsSchedule(
          (cooperator && cooperator.id) || '',
          day,
          month,
          year,
        ),
      );
    },
    [cooperator, dispatch],
  );

  const onDateSelected = (value: string) => {
    const newDate = value.split('/');
    onCooperatorsSchedule(+newDate[0], +newDate[1], +newDate[2]);
    setDate(value);
  };

  useEffect(() => {
    if (params && params.id && cooperatorsMap) {
      setCooperator(cooperatorsMap[params.id]);
    }
  }, [params, cooperatorsMap]);

  useEffect(() => {
    if (cooperator && cooperator.id) {
      setDate(moment().format('DD/MM/YYYY'));
      onCooperatorsSchedule(
        +moment().format('DD'),
        +moment().format('MM'),
        +moment().format('YYYY'),
      );
    }
  }, [cooperator, onCooperatorsSchedule]);

  useEffect(() => {
    if (establishmentsMap) {
      setListEstablishmentsMap(establishmentsMap);
    }
    if (proceduresMap) {
      setListProceduresMap(proceduresMap);
    }
    if (cooperatorsSchedule.length > 0) {
      setSchedules(cooperatorsSchedule);
    }
  }, [establishmentsMap, proceduresMap, cooperatorsSchedule]);

  return {
    date,
    onDateSelected,
    onScheduleDate,
    onBackNavigate,
    setTime,
    cooperator,
    schedules,
    listProceduresMap,
    listEstablishmentsMap,
  };
};

export default useEstablishmentsDetails;
