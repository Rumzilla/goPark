import {GET_CREATOR_BY_ID, GET_EVENT, GET_EVENT_BY_ID} from "../types/types";

const getEventRequestActionCreator = () => ({
    type: GET_EVENT.REQUEST
})

const getEventReceiveActionCreator = (data) => ({
    type: GET_EVENT.RECEIVE,
    payload: data
})

const getEventFailureActionCreator = (err) => ({
    type: GET_EVENT.FAILURE,
    payload: err
})

const getEventByIdRequestActionCreator = () => ({
    type: GET_EVENT_BY_ID.REQUEST
})

const getEventByIdReceiveActionCreator = (data) => ({
    type: GET_EVENT_BY_ID.RECEIVE,
    payload: data
})

const getEventByIdFailureActionCreator = (err) => ({
    type: GET_EVENT_BY_ID.FAILURE,
    payload: err
})

const getCreatorsByIdRequestActionCreator = () => ({
    type: GET_CREATOR_BY_ID.REQUEST
})

const getCreatorsByIdReceiveActionCreator = (data) => ({
    type: GET_CREATOR_BY_ID.RECEIVE,
    payload: data
})

const getCreatorsByIdFailureActionCreator = (err) => ({
    type: GET_CREATOR_BY_ID.FAILURE,
    payload: err
})

export {
    getEventRequestActionCreator,
    getEventReceiveActionCreator,
    getEventFailureActionCreator,

    getEventByIdRequestActionCreator,
    getEventByIdReceiveActionCreator,
    getEventByIdFailureActionCreator,

    getCreatorsByIdRequestActionCreator,
    getCreatorsByIdReceiveActionCreator,
    getCreatorsByIdFailureActionCreator
}