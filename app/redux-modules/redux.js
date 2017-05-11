import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import {videosActionHandler} from './videos'
import {playerActionsHandler} from './player'

const reducers = combineReducers({
    videos: videosActionHandler,
    player: playerActionsHandler
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
