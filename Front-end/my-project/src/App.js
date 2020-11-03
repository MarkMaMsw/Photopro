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
const MainP = React.lazy(() => import('./views/pages/Main/MainP'));
const Profile = React.lazy(() => import('../src/views/pages/profile/Profile'));
const Testform = React.lazy(() => import('./components/ImageUploadForm'));
const AllComments = React.lazy(() => import('./components/AllComments'));
const AllLikes = React.lazy(() => import('./components/AllLikes'));
const ImageCard = React.lazy(() => import('./components/ImageCard'));

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
              <Route exact path="/myform" name="Form Page" render={props => <Testform {...props}/>} />
              <Route exact path="/allcomments" name="Form Page" render={props => <AllComments {...props}/>} />
              <Route exact path="/alllikes" name="Form Page" render={props => <AllLikes {...props}/>} />
              <Route exact path="/imagecard" name="Form Page" render={props => <ImageCard {...props}/>} />
              <Route exact path="/mainpage" name="Main Page" render={props => <Mainpage {...props}/>} />
              <Route exact path="/mainp" name="Main P" render={props => <MainP {...props}/>} />
              <Route path="/profile" name="profile" render={props => <Profile {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
