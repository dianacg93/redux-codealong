import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import PostPage from './pages/PostPage'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><DashboardPage/></Route>
        <Route exact path='/posts'><PostPage/></Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
