import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker';

import {Colors, Dimensions} from 'styles';
import Button, {Variant} from '@components/Button';

import styles from './styles';
import useEstablishmentsDetails from './hooks';
import TimeCard from './components/TimeCard';
import InfoCard from './components/InfoCard';

interface Props {
  address: string;
  name: string;
  image: string;
  navigation: any;
}

interface TopViewProps {
  onPress(): void;
}

const images: any = {
  salao7: require('../../assets/img/salao7.jpeg'),
};

const TopView = ({onPress}: TopViewProps) => (
  <View style={styles.containerTopView}>
    <TouchableOpacity style={styles.buttonTop} onPress={onPress}>
      <MaterialCommunityIcons
        name="arrow-left-thick"
        color={Colors.generic.white}
        size={Dimensions.size30}
      />
    </TouchableOpacity>
    <View style={styles.containerEvaluation}>
      <Text style={styles.textValue}>5.0</Text>
      <Text style={styles.textSubValue}>10 avaliações</Text>
    </View>
  </View>
);

const EstablishmentsDetails = ({
  image = 'salao7',
  navigation,
}: Props): JSX.Element => {
  const {
    onBackNavigate,
    cooperator,
    listEstablishmentsMap,
    listProceduresMap,
    onDateSelected,
    onScheduleDate,
    setTime,
    date,
    schedules,
  } = useEstablishmentsDetails({navigation});
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.generic.transparent}
        barStyle="dark-content"
      />
      <View style={styles.imgContainer}>
        <TopView onPress={onBackNavigate} />
        {image && <Image style={styles.img} source={images[image]} />}
      </View>
      <InfoCard
        cooperator={cooperator}
        listEstablishmentsMap={listEstablishmentsMap}
        listProceduresMap={listProceduresMap}
      />
      <DatePicker
        style={styles.date}
        date={date}
        onDateChange={onDateSelected}
        format="DD/MM/YYYY"
      />
      <TimeCard schedules={schedules} onTime={setTime} />

      <View style={styles.buttonContainer}>
        <Button
          title="Agendar"
          variant={Variant.OrangeBackground}
          onPress={onScheduleDate}
        />
      </View>
    </View>
  );
};

export default EstablishmentsDetails;
