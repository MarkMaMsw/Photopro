import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Mainpage = React.lazy(() => import('./views/pages/mainpage/Mainpage'));

const Mainp = React.lazy(() => import('./views/pages/Main/MainP'));
const MainpBefore = React.lazy(() => import('./views/pages/mainpbefore/MainpBefore'));
const Profile = React.lazy(() => import('../src/views/pages/profile/Profile'));
const ExplorerProfile = React.lazy(() => import('../src/views/pages/explorerprofile/ExplorerProfile'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/mainpage" name="Search Result Page" render={props => <Mainpage {...props}/>} />
              <Route exact path="/mainp" name="Search Result Page" render={props => <Mainp {...props}/>} />
              <Route exact path="/mainpbefore" name="Page before Sign in " render={props => <MainpBefore {...props}/>} />
              <Route path="/profile" name="profile" render={props => <Profile {...props}/>} />
              <Route path="/explorerprofile" name="profile" render={props => <ExplorerProfile {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
