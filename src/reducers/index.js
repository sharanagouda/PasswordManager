import {combineReducers} from 'redux';
import appReducer from './appReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  app: appReducer,
});

export default rootReducer;
