import {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Actions} from '@data/schedule/action';
import {UserAppointment} from '@data/schedule/types';
import {Actions as ActionsCoop} from '@data/cooperator/action';
import {Actions as ActionsPro} from '@data/procedure/action';
import {Actions as ActionsEs} from '@data/establishment/action';

interface Props {
  listSchedules: UserAppointment[];
  listCooperatorsMap: any;
  listProceduresMap: any;
  listEstablishmentsMap: any;
  userName: string;
  onScheduleCancel: (cooperator_id: string, date: Date) => void;
}

const useHome = (): Props => {
  const [userName, setUserName] = useState<string>('');

  const {userInfo} = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [listCooperatorsMap, setListCooperatorsMap] = useState<any>();
  const [listEstablishmentsMap, setListEstablishmentsMap] = useState<any>();
  const [listProceduresMap, setListProceduresMap] = useState<any>();
  const [listSchedules, setListSchedules] = useState<UserAppointment[]>([]);

  const {cooperatorsMap} = useSelector((state: any) => state.cooperator);
  const {schedules} = useSelector((state: any) => state.schedule);
  const {proceduresMap} = useSelector((state: any) => state.procedure);
  const {establishmentsMap} = useSelector((state: any) => state.establishment);

  const onScheduleCancel = useCallback(
    (cooperator_id: string, date: Date) => {
      dispatch(Actions.cancelSchedule(cooperator_id, date));
    },
    [dispatch],
  );

  useEffect(() => {
    if (userInfo && userInfo.name) {
      setUserName(userInfo.name);
    }
  }, [userInfo]);

  useEffect(() => {
    if (cooperatorsMap) {
      setListCooperatorsMap(cooperatorsMap);
    }
  }, [cooperatorsMap]);

  useEffect(() => {
    if (establishmentsMap) {
      setListEstablishmentsMap(establishmentsMap);
    }
  }, [establishmentsMap]);

  useEffect(() => {
    if (proceduresMap) {
      setListProceduresMap(proceduresMap);
    }
  }, [proceduresMap]);

  useEffect(() => {
    if (schedules.length > 0) {
      setListSchedules(schedules);
    }
  }, [schedules]);

  useEffect(() => {
    dispatch(Actions.getSchedule());
    dispatch(ActionsCoop.getCooperator());
    dispatch(ActionsPro.getProcedure());
    dispatch(ActionsEs.getEstablishment());
  }, [dispatch]);

  return {
    listSchedules,
    listEstablishmentsMap,
    listCooperatorsMap,
    listProceduresMap,
    userName,
    onScheduleCancel,
  };
};

export default useHome;
