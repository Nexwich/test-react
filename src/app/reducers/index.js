import { combineReducers } from 'redux';
import logs from './logs';

export default combineReducers({ alerts: logs });
