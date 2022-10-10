import React from 'react'
import {Link} from 'react-router-dom'

function GoBackLink() {
  return (
    <Link to='/' className='link'>
            <span class="material-icons-outlined">
              arrow_back
            </span>
            <span>
                View all students
            </span>
    </Link>
  )
}

export default GoBackLink