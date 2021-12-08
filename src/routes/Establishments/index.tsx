import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import DarkStatusBar from '@components/DarkStatusBar';
import locales from '@locales/establishment';

import styles from './styles';
import useEstablishment from './hooks';
import EstablishmentsCard from './components/EstablishmentCard';
import SearchInput from './components/SearchInput';

const Establishments = (): JSX.Element => {
  const {
    establishmentList,
    listCooperators,
    listEstablishmentsMap,
    listProceduresMap,
  } = useEstablishment();
  return (
    <View style={styles.root}>
      <DarkStatusBar />
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.textResults}>
          {locales.results} (
          {establishmentList.length > 0 ? establishmentList.length : 0})
        </Text>
        {listEstablishmentsMap &&
          listProceduresMap &&
          listCooperators.map((item: any) => (
            <EstablishmentsCard
              key={item.id}
              id={item.id}
              name={item.name}
              address={`${
                (listEstablishmentsMap[item.estab_id] &&
                  listEstablishmentsMap[item.estab_id].nomeFantasia) ||
                '--'
              }  /  ${
                listProceduresMap[item.procedure_id] &&
                listProceduresMap[item.procedure_id].name
              }`}
              image={item.image}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Establishments;
