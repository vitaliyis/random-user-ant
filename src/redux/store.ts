import {applyMiddleware, createStore} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store =createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// store.subscribe(() => {
//   localStorage['contacts-store'] = JSON.stringify(store.getState().contacts);
// })

export type RootState = ReturnType<typeof rootReducer>

export default store;
