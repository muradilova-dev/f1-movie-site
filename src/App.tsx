import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BasketList from './pages/BasketList'
import BasketDetail from './pages/BasketDetail'
import CreateOrder from './pages/CreateOrder'
import UpdateOrder from './pages/UpdateOrder'

// Сохраняем твои красивые команды для главной
const teams = [
  { name: "McLaren", color: "from-orange-500 to-orange-600", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/mclaren.png.transform/2col/image.png" },
  { name: "Ferrari", color: "from-red-600 to-red-700", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/ferrari.png.transform/2col/image.png" },
  { name: "Red Bull", color: "from-blue-700 to-blue-900", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/redbull.png.transform/2col/image.png" },
  { name: "Mercedes", color: "from-teal-500 to-teal-700", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/mercedes.png.transform/2col/image.png" },
  { name: "APX GP", color: "from-purple-600 to-pink-600", car: "https://i.imgur.com/2kL2f8F.jpeg" }, // команда из фильма!
]

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* ТВОЙ КРАСИВЫЙ ХЕДЕР */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-4 border-red-600">
          <div className="container mx-auto px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-black text-red-600">F1</span>
              <span className="text-4xl font-bold bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">
                MOVIE SHOP 2025
              </span>
            </div>
            <nav className="space-x-10 text-xl">
              <Link to="/" className="hover:text-red-500 transition neon">Главная</Link>
              <Link to="/teams" className="hover:text-red-500 transition neon">Команды</Link>
              <Link to="/basket" className="hover:text-red-500 transition neon">Корзина</Link>
            </nav>
          </div>
        </header>

        <Routes>
          {/* ГЛАВНАЯ */}
          <Route path="/" element={
            <div className="relative h-screen flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-90" />
              <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-30">
                <source src="https://videos.pexels.com/video-files/854191/854191-hd_1920_1080_24fps.mp4" />
              </video>
              <div className="relative text-center z-10">
                <h1 className="text-9xl font-black mb-8 animate-pulse"
                    style={{ textShadow: '0 0 60px #ff0000, 0 0 120px #ff0000' }}>
                  <span className="bg-gradient-to-r from-red-600 via-white to-red-600 bg-clip-text text-transparent">
                    F1 THE MOVIE
                  </span>
                </h1>
                <p className="text-5xl mb-12 text-gray-300">Брэд Питт • 27 июня 2025</p>
                <div className="space-x-10">
                  <Link to="/teams" className="px-20 py-8 text-4xl bg-red-600 hover:bg-red-700 rounded-full shadow-2xl">
                    КОМАНДЫ
                  </Link>
                  <Link to="/basket" className="px-20 py-8 text-4xl bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-2xl">
                    КОРЗИНА
                  </Link>
                </div>
              </div>
            </div>
          } />

          {/* КОМАНДЫ — твоя страница */}
          <Route path="/teams" element={
            <div className="pt-32 pb-20 px-8" style={{ background: 'radial-gradient(circle at top, #1a0033, #000000)' }}>
              <h1 className="text-center text-8xl font-black mb-20" style={{ textShadow: '0 0 80px #ff0000' }}>
                <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent">
                  КОМАНДЫ 2025
                </span>
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {teams.map((team) => (
                  <div key={team.name} className="group cursor-pointer transform hover:scale-110 transition duration-500">
                    <div className={`relative bg-gradient-to-br ${team.color} p-8 rounded-3xl shadow-2xl border-4 border-white/20 
                                    group-hover:border-white transition-all`}>
                      <img src={team.car} alt={team.name} className="w-full drop-shadow-2xl" />
                      <div className="absolute inset-0 bg-black/50 rounded-3xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <p className="text-4xl font-black text-white drop-shadow-2xl">{team.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } />

          {/* CRUD СТРАНИЦЫ */}
          <Route path="/basket" element={<BasketList />} />
          <Route path="/basket/:id" element={<BasketDetail />} />
          <Route path="/create" element={<CreateOrder />} />
          <Route path="/update/:id" element={<UpdateOrder />} />
        </Routes>
      </div>

      <style jsx>{`
        .neon:hover { text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; }
      `}</style>
    </BrowserRouter>
  )
}