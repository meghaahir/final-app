import {
    API_PRODUCT,
} from "../constants/api";
import {
    API,
    API_VIEW_F, API_VIEW_S
} from "../constants/types";

export  const view = () => ({
    type: API,
    payload: {
        url: API_PRODUCT,
        method: 'GET',
        success: (res) => ({
            type: API_VIEW_S,
            payload: res
        }),
        error: (res) => ({
            type: API_VIEW_F,
            payload: res
        })
    }
})


