import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { CContainer, CFade } from '@coreui/react'
import ExplorerProfile from '../../../components/explorer/myprofile/ExplorerProfile'
import Collection from '../../../components/explorer/collection/Collection'
import AllComment from '../../../components/explorer/mycomments/AllComment'
import AllLike from '../../../components/explorer/mylikes/AllLike'
import AllPurchase from '../../../components/explorer/mypurchase/AllPurchase'
import ShoppingCart from '../../../components/explorer/shoppingcart/Shoppingcart';

  
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
            <Route path="/explorerprofile/profile" render={props => (<CFade><ExplorerProfile/></CFade>)}/>
            <Route path="/explorerprofile/collection" render={props => (<CFade><Collection/></CFade>)}/>
            <Route path="/explorerprofile/comments" render={props => (<CFade><AllComment/></CFade>)}/>
            <Route path="/explorerprofile/likes" render={props => (<CFade><AllLike/></CFade>)}/>
            <Route path="/explorerprofile/purchase" render={props => (<CFade><AllPurchase/></CFade>)}/>
            <Route path="/explorerprofile/shoppingcart" render={props => (<CFade><ShoppingCart/></CFade>)}/>
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
