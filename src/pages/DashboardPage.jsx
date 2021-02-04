import {Link} from 'react-router-dom'

const DashboardPage = () => {
    return(
        <section>
            <h1>Dashboard Page</h1>
            <p>This is the Dashboard</p>
            <Link to='/posts' className="button">View Posts</Link>
        </section>
    )
}

export default DashboardPage;