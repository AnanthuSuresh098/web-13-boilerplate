import { GET_MOVIE_DATA_REQ , GET_MOVIE_DATA_SUCCESS , GET_MOVIE_DATA_FAILURE ,FILTER_BY_GENRE } from "./actionTypes";

const initState = {
    data: [],
    filterData:[],
    isLoading:false,
    isError: false
}

export const Reducer = (state=initState,action)=>{
    // add the switch statement for different actions
    console.log(state,action)
    switch (action.type){
        case GET_MOVIE_DATA_REQ:
        return{
            ...state,isLoading:true
        }

        case GET_MOVIE_DATA_SUCCESS:
        return{
            ...state,data:[...state.data,action.payload],isLoading:false
        }

        case GET_MOVIE_DATA_FAILURE:
        return{
            ...state,isLoading:false,isError:true
        }
        
        default:
         return state;
    }
}