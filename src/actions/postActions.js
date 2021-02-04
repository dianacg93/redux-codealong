import postReducer from "../reducers/postReducer"
// Create Redux action types
export const GET_POSTS = 'GET_POSTS'
//getPosts telling Redux that we are going to fetch posts from an API
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
//getPostsSuccess passing the posts to Redux on a successful API call
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
//getPostsFailure informing redux that an error was encountered
// during Redux on failed API call
// create action creators, which are functions that return an action
// which consists of the type and an optional payload loading data
export const getPosts = () => ({
  type: GET_POSTS,
})
export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})
export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})

// Finally, make the asynchronous thunk action that combines all three of the actions
// When called, it will dispatch the initial getPost()
// action to inform redux to prepare for an api call, then in a try/catch 
// and dispatch a success or failure action as necessary

export function fetchPosts(){
    return async (dispatch) => {
        dispatch(getPosts())
        //dispatch is a method available in the store object that accepts 
    //an object which is used to update the Redux state 
    //usually this object is the result of invoking an action creator
        try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const data = await res.json();
            dispatch(getPostsSuccess(data))
        }
        catch(e) {
            console.log(e)
            dispatch(getPostsFailure())
        }
    }
}