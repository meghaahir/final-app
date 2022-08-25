import {
    API_PRODUCT,
} from "../constants/api";
import {
    API,
   API_ADD_F,API_ADD_S
} from "../constants/types";

export  const addproduct = (data) => ({
    type: API,
    payload: {
        url: API_PRODUCT,
        method: 'POST',
        data: data ,
        //headers:{'Content-Type': 'multipart/form-data'},
        success: (data) => ({

            type: API_ADD_S,
            payload: data  
        }),
        error: (data) => ({
            type: API_ADD_F,
            payload: data
        })
    }
})

