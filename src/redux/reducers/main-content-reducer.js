import {GET_EVENT} from "../types/types";

const initialState = {}

const contentReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT.REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            }

    }
}