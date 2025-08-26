import Home from "./components/Home";

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enhancer</h1>
          <p className="text-lg text-gray-500">Powered by @Practice project</p>
        </div>
        <Home />
        <div className="text-gray-500 text-lg mt-6">
          Upload your image and let ai enhance it
        </div>
      </div>
    </>
  )
}

export default App
