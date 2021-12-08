import {useCallback} from 'react';
import {useNavigation} from 'react-navigation-hooks';

import routesName from '@routes/index';

interface Props {
  id: string;
}
interface EstablishmentCardProps {
  onClickNavigate(): void;
}

const useEstablishmentCard = ({id}: Props): EstablishmentCardProps => {
  const {navigate} = useNavigation();

  const onClickNavigate = useCallback(() => {
    navigate(routesName.EstablishmentsDetails, {
      id: id,
    });
  }, [id, navigate]);

  return {
    onClickNavigate,
  };
};

export default useEstablishmentCard;
