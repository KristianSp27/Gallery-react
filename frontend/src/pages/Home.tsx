import React from 'react'
import { Navbar } from '../components/Navbar'
import { UploadForm } from '../components/UploadForm'
import { ImageGallery } from '../components/ImageGallery'

export const Home = () => {

  return (
    <div>
      <Navbar />
      <UploadForm />
      <ImageGallery/>
    </div>
  )
}
