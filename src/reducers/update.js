import {
    API_UPDATE_S,API_UPDATE_F
 } from '../constants/types';
 
 const initialState = {
     product: [],
 };
 
 const updateReducer = (state = initialState, action) => {
     switch (action.type) {
         case API_UPDATE_S:
             return { ...state, product: action.payload };
         case API_UPDATE_F:
             return { ...state,product:[] };
         default:
             return state;
     }
 }
 
 export default updateReducer;