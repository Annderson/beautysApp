import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import routesName from '@routes/index';

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
  onScheduleCancel: (cooperator_id: string, date: Date) => void;
  onClickNavigate: (cooperator_id: string) => void;
}

const useSchedule = (): Props => {
  const {navigate} = useNavigation();
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

  const onClickNavigate = useCallback(
    (cooperator_id: string) => {
      navigate(routesName.EstablishmentsDetails, {
        id: cooperator_id,
      });
    },
    [navigate],
  );

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
    onScheduleCancel,
    onClickNavigate,
  };
};

export default useSchedule;
