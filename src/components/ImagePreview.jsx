import Loading from "./Loading"

const ImagePreview = ({ uploadImage, enhancedImage, loading }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* orginal image  */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden max-h-[510px]">
        <h2 className="text-xl font-semibold bg-gray-800 text-center py-2 text-white">
            Orignal Image
        </h2>
        {uploadImage ? <img src={uploadImage} alt="" className="w-full h-full object-cover" /> : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
              No Image Selected
          </div>
        )}
        
      </div>

      {/* Enhanced Image  */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden max-h-[510px]">
        <h2 className="text-xl font-semibold bg-blue-800 text-center py-2 text-white">
            Enhanced Image
        </h2>
        {loading ? <Loading /> : enhancedImage ? <img src={enhancedImage} alt="" className="w-full h-full object-cover" /> : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
              No Enhanced Selected
          </div>
        )}        
      </div>
    </div>
  )
}

export default ImagePreview
