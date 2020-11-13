import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Shoppingcart from './views/pages/shoppingcart/Shoppingcart';

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
const Main = React.lazy(() => import('./views/pages/main/Main'));
const Profile = React.lazy(() => import('../src/views/pages/profile/Profile'));
const ExplorerProfile = React.lazy(() => import('../src/views/pages/explorerprofile/ExplorerProfile'));
const AuthorDetail = React.lazy(() => import('../src/views/pages/author_detail/Authordetail'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/profile" name="profile" render={props => <Profile {...props}/>} />
              <Route path="/explorerprofile" name="profile" render={props => <ExplorerProfile {...props}/>} />
              <Route path="/authordetail/:id" name="profile" render={props => <AuthorDetail {...props}/>} />
              <Route path="/shoppingcart" name="shopping_cart" render={props => <Shoppingcart{...props}/>}/>
              <Route path="/404" name="404" render={props => <Page404 {...props}/>} />
              <Route path="/main" name="Main Page" render={props => <Main {...props}/>} />
              <Route path="/" name="Main Page" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
