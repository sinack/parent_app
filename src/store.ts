import { configureStore } from '@reduxjs/toolkit'
import  { counterReducer }  from 'my-redux-component'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
