import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Actions} from '@data/establishment/action';
import {Actions as ActionsPro} from '@data/procedure/action';
import {Actions as ActionsCoop} from '@data/cooperator/action';
import {Cooperator} from '@data/cooperator/types';

interface Props {
  listCooperators: Cooperator[];
  establishmentList: any[];
  listEstablishmentsMap: any;
  listProceduresMap: any;
}

const useEstablishment = (): Props => {
  const dispatch = useDispatch();
  const {establishments, establishmentsMap} = useSelector(
    (state: any) => state.establishment,
  );
  const {cooperators} = useSelector((state: any) => state.cooperator);
  const {proceduresMap} = useSelector((state: any) => state.procedure);

  const [listCooperators, setListCooperators] = useState<Cooperator[]>([]);
  const [establishmentList, setEstablishmentList] = useState<any[]>([]);
  const [listEstablishmentsMap, setListEstablishmentMap] = useState<any>();
  const [listProceduresMap, setListProceduresMap] = useState<any>();

  useEffect(() => {
    if (establishments && establishments.length > 0) {
      setEstablishmentList(establishments);
    }
    if (establishmentsMap) {
      setListEstablishmentMap(establishmentsMap);
    }
  }, [establishments, establishmentsMap]);

  useEffect(() => {
    if (cooperators && cooperators.length > 0) {
      setListCooperators(cooperators);
    }
  }, [cooperators]);

  useEffect(() => {
    if (proceduresMap) {
      setListProceduresMap(proceduresMap);
    }
  }, [proceduresMap]);

  useEffect(() => {
    dispatch(Actions.getEstablishment());
    dispatch(ActionsCoop.getCooperator());
    dispatch(ActionsPro.getProcedure());
  }, [dispatch]);
  return {
    listProceduresMap,
    listCooperators,
    establishmentList,
    listEstablishmentsMap,
  };
};

export default useEstablishment;
