import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages';
import StatusPage from './pages/admin/status';
import InboxPage from './pages/admin/inbox';
import DashboardLayout from './dashboard/layout';
import UserPage from './pages/admin/userpage';
import SettingsPage from './pages/admin/settings';
import TablePage from './pages/admin/datatable'
import Login from './pages/login'
import useToken from './dashboard/data/useToken';
import history from './dashboard/data/history';

function App() {
  const { token, setToken, deleteToken } = useToken();
  //  send the set token setter as a prop to use in Login
  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <Router history={history}>
      <DashboardLayout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/admin/userpage">
            <UserPage />
          </Route>
          <Route exact path="/admin/inbox">
            <InboxPage />
          </Route>
          <Route exact path="/admin/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/admin/status">
            <StatusPage />
          </Route>
          <Route exact path='/admin/datatables'>
            <TablePage />
          </Route>
          <Route exact path='/login'>
            <Login setToken={setToken} />
          </ Route>
          <Route exact path='/logout' >
          {deleteToken}
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default App;
