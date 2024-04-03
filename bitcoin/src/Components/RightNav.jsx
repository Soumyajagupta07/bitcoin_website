import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-regular-svg-icons'

import React from 'react'

const RightNav = () => {
  return (
    <div className='RightNav'>
        <button>
            <FontAwesomeIcon icon={faUser }></FontAwesomeIcon>
            <p>Sign in</p>
        </button>
    </div>
  )
}
export default RightNav;