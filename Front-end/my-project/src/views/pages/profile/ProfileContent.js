import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { CContainer, CFade } from '@coreui/react'
import ContributorProfile from '../../../components/contributor/Profile/ContributorProfile'
import ContributorPhotos from '../../../components/contributor/AllPhotos/ContributorPhotos'
import AllComments from '../../../components/contributor/AllComments/AllComments'
import AllLikes from '../../../components/contributor/AllLikes/AllLikes' 
// import AllPurchase from '../../../components/contributor/AllPurchse/AllPurchase' 
import AllPurchases from '../../../components/contributor/AllPurchse/AllPurchases' 
import ImageUploadForm from '../../../components/contributor/PhotoUpload/ImageUploadForm'
import Statistic from '../../../components/contributor/Statistic/Statistic'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            <Route path="/profile/contributorprofile" render={props => (<CFade><ContributorProfile/></CFade>)}/>
            <Route path="/profile/contributorphotos" render={props => (<CFade><ContributorPhotos/></CFade>)}/>
            <Route path="/profile/allcomments" render={props => (<CFade><AllComments/></CFade>)}/>
            <Route path="/profile/alllikes" render={props => (<CFade><AllLikes/></CFade>)}/>
            <Route path="/profile/allpurchase" render={props => (<CFade><AllPurchases/></CFade>)}/>
            <Route path="/profile/imageuploadform" render={props => (<CFade><ImageUploadForm/></CFade>)}/>
            <Route path="/profile/statistic" render={props => (<CFade><Statistic/></CFade>)}/>
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
