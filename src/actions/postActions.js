import postsReducer from "../reducers/postsReducer"
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
export const getPostsSuccess = (Post) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})
export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})