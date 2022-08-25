import {
    API_GET_S,API_GET_F
 } from '../constants/types';
 
 const initialState = {
     product: [],
 };
 
 const getReducer = (state = initialState, action) => {
     switch (action.type) {
         case API_GET_S:
             return { ...state, product: action.payload };
         case API_GET_F:
             return { ...state,product:[] };
         default:
             return state;
     }
 }
 
 export default getReducer;