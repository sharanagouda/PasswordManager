import {combineReducers} from 'redux';
import appReducer from './appReducer';
import {reducer as form} from 'redux-form/immutable';

const rootReducer = combineReducers({
  form,
  app: appReducer,
});

export default rootReducer;
