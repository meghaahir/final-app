import { API_DELETE_F, API_DELETE_S } from '../constants/types';
 
 const initialState = {
     id: undefined,
 };
 
 const deleteReducer = (state = initialState, action) => {
     switch (action.type) {
         case API_DELETE_S:
             return { ...state, id: action.payload };
         case API_DELETE_F:
             return { ...state };
         default:
             return state;
     }
 }
 
 export default deleteReducer;