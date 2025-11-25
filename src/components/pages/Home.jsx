import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="https://videos.pexels.com/video-files/854191/854191-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 text-center px-8">
        <h1 className="text-8xl md:text-9xl font-black gradient-text mb-8 drop-shadow-2xl">
          F1 THE MOVIE
        </h1>
        <p className="text-4xl md:text-6xl mb-12 text-gray-200">Брэд Питт · 27 июня 2025</p>
        
        <div className="space-x-10">
          <Link to="/artwork" className="bg-red-600 hover:bg-red-700 px-16 py-8 text-3xl rounded-full transition transform hover:scale-110 shadow-2xl">
            ПОСТЕР
          </Link>
          <Link to="/drivers" className="border-4 border-white hover:bg-white hover:text-black px-16 py-8 text-3xl rounded-full transition transform hover:scale-110 shadow-2xl">
            ДРАЙВЕРЫ 2025
          </Link>
        </div>
      </div>
    </div>
  )
}