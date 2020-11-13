import React from 'react'
import { CFooter } from '@coreui/react'

const ShoppingcartFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">2020-Term3</a>
        <span className="ml-1">&copy; COMP9900.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">Group Fighting</a>
      </div>
    </CFooter>
  )
}

export default ShoppingcartFooter;