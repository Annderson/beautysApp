import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import styles from './styles';
import useEstablishmentCard from './hooks';

interface Props {
  address: string;
  id: string;
  image: string;
  name: string;
}

const images: any = {
  salao4: require('../../../../assets/img/salao7.jpeg'),
  salao5: require('../../../../assets/img/salao5.jpg'),
  salao6: require('../../../../assets/img/salao6.jpg'),
  salao7: require('../../../../assets/img/salao7.jpeg'),
};

const EstablishmentCard = ({
  id,
  image = 'salao7',
  name,
  address,
}: Props): JSX.Element => {
  const {onClickNavigate} = useEstablishmentCard({id});
  return (
    <TouchableOpacity style={styles.container} onPress={onClickNavigate}>
      <View style={styles.imgContainer}>
        {image && <Image style={styles.img} source={images[image]} />}
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.textAddress}>{address}</Text>
    </TouchableOpacity>
  );
};

export default EstablishmentCard;
