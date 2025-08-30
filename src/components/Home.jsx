import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"
import { enhancedImageApi } from "../utils/services";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUploadedImage = async (file) => {
    // console.log("File : ", file)
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedImageURL = await enhancedImageApi(file);
      setEnhancedImage(enhancedImageURL);
    } catch(err) {
      console.log("error : ", err)
      alert(`Error! ${err?.message}`)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ImageUpload handleUploadedImage={handleUploadedImage} />
      <ImagePreview 
        uploadImage={uploadImage}
        loading={loading}
        enhancedImage={enhancedImage}
      />
    </>
  )
}

export default Home
