import {useEffect} from 'react'
import {connect } from 'react-redux'
import {fetchPosts} from '../actions/postActions'
import {Post} from '../components/Post'

//The connect function is a high order funct that connects the redux store to a react component

//Redux state is now in the props of the component
const PostPage = ({dispatch, loading, posts, hasErrors}) => {

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const renderPosts =() => {
        if( loading) return <p>Loading Posts...</p>
        if(hasErrors) return <p>An Error has occurred</p>
        return posts.map((post, i) => {
            return <Post key={post.id} post={post} />
        })
    }
    
    return(
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors
})

export default connect(mapStateToProps)(PostPage);