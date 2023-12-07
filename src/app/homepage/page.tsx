import React from 'react'
import HomePageImage from '../.././../public/reliability.jpg'
import CustomImage from '../../components/customImage/CustomImage'
function HomePage() {
  return (
    <div>HomePage
      <CustomImage title={'HomePage'} image={HomePageImage} altText={'homepage-screen-img'} />
      
    </div>
  )
}

export default HomePage