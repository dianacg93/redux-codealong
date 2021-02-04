import * as actions from '../actions/postActions';

export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}

//for ech action we'll make a case that will return the entire state plus the change we're making to it

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_POSTS:
            return{...state, loading:true}
        case actions.GET_POSTS_SUCCESS:
            return{ ...state, posts:action.payload, loading: false}
        case actions.GET_POSTS_FAILURE:
            return{ ...state, hasErrors: true, loading: false}
        default:
            return state
    }
}
