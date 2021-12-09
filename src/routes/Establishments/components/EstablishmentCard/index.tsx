import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import styles from './styles';
import useEstablishmentCard from './hooks';
// import endpoint from 'data/api/endpoint';

interface Props {
  address: string;
  id: string;
  image: any;
  name: string;
}
/*
const images: any = {
  salao4: require('../../../../assets/img/salao7.jpeg'),
  salao5: require('../../../../assets/img/salao5.jpg'),
  salao6: require('../../../../assets/img/salao6.jpg'),
  salao7: require('../../../../assets/img/salao7.jpeg'),
};
*/
const EstablishmentCard = ({id, image, name, address}: Props): JSX.Element => {
  /*
  const [url, setUrl] = useState<any>();
  console.log('image ', image);*/
  const {onClickNavigate} = useEstablishmentCard({id});
  /*
  useEffect(() => {
    if (image) {
      setUrl('http://192.168.1.254:3333/files/pessoa8.png​​​​​​​​​');
    }
  }, [image]);*/
  return (
    <TouchableOpacity style={styles.container} onPress={onClickNavigate}>
      <View style={styles.imgContainer}>
        {image && (
          <Image
            style={styles.img}
            source={{uri: 'http://192.168.1.254:3333/files/pessoa8.png'}}
          />
        )}
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.textAddress}>{address}</Text>
    </TouchableOpacity>
  );
};

export default EstablishmentCard;
