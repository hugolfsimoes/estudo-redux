
import { combineReducers, legacy_createStore as createStore } from 'redux';
import NumerosReducer from './Reducers/numerosReducer';
const reducers = combineReducers({
  numeros: NumerosReducer,
});

export default function storeConfig() {
  return createStore(reducers);
}