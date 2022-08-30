import { configureStore } from "@reduxjs/toolkit";

const initValue = {
  create: {
    content: "",
    date: "",
    id :""
  },
  list: [],

};
const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case "CHANGE_CONTENT":
        return{
            ...state , create : {...state.create, content : action.payload}
        }

    case "CHANGE_DATE":
        return{
            ...state , create : {...state.create, date : action.payload}
        }
    case "CALL_API":
        return{
            ...state,list : action.payload
        }
    case "ADD_JOB":
        return{
            ...state,list : [...state.list , action.payload]
        }   
    case "REMOVE_JOB":
        const newList = state.list.filter(e => e.id !== action.payload.id)
        return{
            ...state,list :newList
        } 
    default:
      return state;
  }
};

export const changeText = (type,payload) => {
return{
    type,
    payload
}
}
export const callApiRequest = () => {
    return (dispatch) => {
        (async ()=> {
            try {
                const res = await JSON.parse(localStorage.getItem('job'))
                dispatch(callApi(res))
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const addJobRequest = (data) => {
    return (dispatch) => {
        (async ()=> {
            try {
               await localStorage.setItem('job',JSON.stringify(data))
                dispatch(addJob(data))
            } catch (error) {
                console.log(error);
                
            }
        })()
    }
}
export const removeJobRequest = (data,item) => {
    return (dispatch) => {
        (async ()=> {
            try {
               const newData = data.filter(e => e.id !== item.id)
               await localStorage.setItem('job',JSON.stringify(newData))
                dispatch(removeJob(item))
            } catch (error) {
                console.log(error);
                
            }
        })()
    }
}
export const callApi = (data) => {
return{
    type : "CALL_API",
    payload : data
}
}
export const addJob = (data) => {
    return {
        type : "ADD_JOB" ,
        payload : data
    }
}
export const  removeJob = (item) => {
    return {
        type : "REMOVE_JOB" ,
        payload : item
    }
}
const store = configureStore({ reducer: rootReducer });
export default store;
