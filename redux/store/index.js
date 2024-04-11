import {configureStore} from '@reduxjs/toolkit'
import { xeReducer } from '../reducer/xeReducer'

export default configureStore({
   reducer:{
    listXe: xeReducer
   }  
})