import React from 'react'
import { Icon } from 'antd'

import './scss/index.scss'

const MyProfileTab = () => {
  return (
    <div className='my-profile-tab'>
      <span className='my-profile-tab__name'>Ashu</span>
      <a href='/myprofile'>
        <div className='my-profile-tab__icon'>
          <Icon type='user' />
        </div>
      </a>
    </div>
  )
}

export default MyProfileTab
