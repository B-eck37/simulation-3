const initialState = {
    user: '',
}

const LOGIN = 'LOGIN'

//Set reducer / Action Handler
export default function reducer(state=initialState, action){
    switch (action.type){
    case LOGIN: 
        return {...state, user: action.payload}
    default: 
        return state
    }
}


//Action Creator
export const login = (user) => {
    console.log(user)
    return {
        type: LOGIN,
        payload: user,
    }
}