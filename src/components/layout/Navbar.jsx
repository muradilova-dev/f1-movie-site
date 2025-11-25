import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-black border-b-4 border-red-600 sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/" className="text-5xl font-black gradient-text animate-pulse">
          F1 MOVIE
        </Link>
        <div className="space-x-12 text-xl">
          <Link to="/" className="hover:text-red-500 transition">Главная</Link>
          <Link to="/artwork" className="hover:text-red-500 transition">Постер</Link>
          <Link to="/drivers" className="hover:text-red-500 transition">Драйверы</Link>
        </div>
      </div>
    </nav>
  )
}