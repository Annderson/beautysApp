import React from 'react';
import {Text, View} from 'react-native';

import {Cooperator} from '@data/cooperator/types';

import styles from './styles';

interface Props {
  cooperator: Cooperator | undefined;
  listProceduresMap: any;
  listEstablishmentsMap: any;
}

const InfoCard = ({
  cooperator,
  listEstablishmentsMap,
  listProceduresMap,
}: Props): JSX.Element => (
  <View style={styles.detailsContainer}>
    <Text style={styles.title}>{cooperator && cooperator.name}</Text>
    <Text style={styles.textAddress}>
      {`Procedimento:   ${
        cooperator &&
        listProceduresMap &&
        listProceduresMap[cooperator.procedure_id].name
      }`}
    </Text>
    <Text style={styles.textAddress}>
      {`${
        cooperator &&
        listEstablishmentsMap &&
        listEstablishmentsMap[cooperator.estab_id].nomeFantasia
      } -  ${
        cooperator &&
        listEstablishmentsMap &&
        listEstablishmentsMap[cooperator.estab_id].endereco
      }`}
    </Text>
    <Text style={styles.textAddress}>
      {`${
        cooperator &&
        listEstablishmentsMap &&
        listEstablishmentsMap[cooperator.estab_id].cidade
      } / ${
        cooperator &&
        listEstablishmentsMap &&
        listEstablishmentsMap[cooperator.estab_id].uf
      }`}
    </Text>
  </View>
);

export default InfoCard;
