import {
    API_VIEW_F, API_VIEW_S
 } from '../constants/types';
 
 const initialState = {
     value: [],
 };
 
 const viewReducer = (state = initialState, action) => {
     switch (action.type) {
         case API_VIEW_S:
             return { ...state, value: action.payload };
         case API_VIEW_F:
             return { ...state , value:[]};
         default:
             return state;
     }
 }
 
 export default viewReducer;