import React from 'react'
import profileImage from '../../../public/performance.jpg'
import CustomImage from '../../components/customImage/CustomImage'
function ProfilePage() {

  
  return (
    <div>ProfilePage
      <CustomImage title='ProfilePage' image={profileImage} altText={'profile-screen-img'} />
    </div>
  )
}

export default ProfilePage