import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = { 
    logged: false
};

const authReducer = (state= INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.LOGIN_INTO:{
            return {
                ...state,
                logged: true
            }
        }
        default: {
            return state
        }
    }
}

export default authReducer;