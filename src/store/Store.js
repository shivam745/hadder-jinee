import { configureStore } from "@reduxjs/toolkit";
import saveCreditials from '../Slice/slice'
  const store=configureStore({
     reducer:{
         login:saveCreditials
     }
 })
 export default store
