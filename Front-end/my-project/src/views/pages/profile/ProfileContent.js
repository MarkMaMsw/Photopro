import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { CContainer, CFade } from '@coreui/react'
import ImageUploadForm from '../../../components/ImageUploadForm'

// routes config
// import routes from '../../../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <Link to="/profile/imageuploadform">Upload</Link>
      <CContainer fluid>
        <ImageUploadForm/>
        {/* <Switch>
          <Route path="/profile/imageuploadform" component={ImageUploadForm} />
        </Switch> */}
        {/* <Suspense fallback={loading}>
          <Switch>
            <Route path="/profile/imageuploadform" component={ImageUploadForm} exact/>
            {/* {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })} */}
            {/* <Redirect exact from="/" to="/profile" />
          </Switch>
        </Suspense> */} */}
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
