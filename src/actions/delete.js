import {
    API_DELETE,
} from "../constants/api";
import {
    API,
   API_DELETE_F,API_DELETE_S
} from "../constants/types";

export  const doDelete = (data) => ({
    type: API,
    payload: {
        url: API_DELETE,
        method: 'POST',
        data: data ,
       
        success: (data) => ({
            type: API_DELETE_S,
            payload: data  
        }),
        error: (data) => ({
            type: API_DELETE_F,
            payload: data
        })
    }
})

