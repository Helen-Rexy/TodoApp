import {combineReducers} from '@reduxjs/toolkit';

import TodoSlice from './TodoSlice';

const rootReducer = combineReducers({
  todo: TodoSlice,
});

export default rootReducer;
