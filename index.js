/**
 * @format
 */

import {AppRegistry} from 'react-native';
import moment from 'moment';

import {name as appName} from './app.json';

import App from 'app';

moment.locale('pt');
moment.updateLocale('pt', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthsShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
});

AppRegistry.registerComponent(appName, () => App);
