import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const teams = [
  { name: "McLaren", color: "from-orange-500 to-orange-600", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/mclaren.png.transform/2col/image.png" },
  { name: "Ferrari", color: "from-red-600 to-red-700", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/ferrari.png.transform/2col/image.png" },
  { name: "Red Bull", color: "from-blue-700 to-blue-900", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/redbull.png.transform/2col/image.png" },
  { name: "Mercedes", color: "from-teal-500 to-teal-700", car: "https://media.formula1.com/image/upload/f_auto/q_auto/v1739461234/content/dam/f1/teams/2025/mercedes.png.transform/2col/image.png" },
  { name: "APX GP", color: "from-purple-600 to-pink-600", car: "https://i.imgur.com/2kL2f8F.jpeg" },
]

// Страница логина (отдельная стартовая)
const LoginPage = () => {
  const handleLogin = () => {
    const email = (document.getElementById('email-input') as HTMLInputElement).value;
    if (email) {
      localStorage.setItem('f1-user', email);
      window.location.href = '/'; // переходим на главную
    } else {
      alert('Введи email!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(#000, #110033)' }}>
      <div className="max-w-lg w-full px-12 py-20 bg-black/80 border-8 border-red-600 rounded-3xl shadow-2xl text-center">
        <h1 className="text-8xl font-black mb-16" style={{ textShadow: '0 0 80px #ff0000' }}>
          <span className="bg-gradient-to-r from-red-600 to-cyan-400 bg-clip-text text-transparent">
            ВХОД В F1
          </span>
        </h1>
        <input
          id="email-input"
          type="email"
          placeholder="Твой email"
          className="w-full px-10 py-8 text-3xl bg-black/60 border-4 border-red-600 rounded-3xl text-white placeholder-gray-500 mb-12 focus:border-cyan-400 focus:outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full py-10 text-5xl bg-gradient-to-r from-red-600 to-cyan-600 rounded-full shadow-2xl hover:shadow-cyan-600/70 transition font-black"
        >
          ВОЙТИ
        </button>
        <p className="mt-12 text-2xl text-gray-400">
          Просто введи любой email — пароль не нужен 😎
        </p>
      </div>
    </div>
  );
};

// Главный сайт (только после логина)
const MainSite = () => {
  const userEmail = localStorage.getItem('f1-user') || 'Гость';

  const handleLogout = () => {
    localStorage.removeItem('f1-user');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
            <span className="text-cyan-400">Привет, {userEmail.split('@')[0]}!</span>
            <button onClick={handleLogout} className="text-red-500 hover:text-red-300 transition">
              Выйти
            </button>
          </nav>
        </div>
      </header>

      <Routes>
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
                  <div className={`relative bg-gradient-to-br ${team.color} p-8 rounded-3xl shadow-2xl border-4 border-white/20 group-hover:border-white transition-all`}>
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

        {/* Твои страницы корзины — оставь как есть */}
        <Route path="/basket" element={<BasketList />} />
        <Route path="/basket/:id" element={<BasketDetail />} />
        <Route path="/create" element={<CreateOrder />} />
        <Route path="/update/:id" element={<UpdateOrder />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="*" element={currentUser ? <MainSite /> : <Navigate to="/login" />} />
      </Routes>

      <style jsx>{`
        .neon:hover { text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; }
      `}</style>
    </div>
  );
};

export default function App() {
  const isLoggedIn = localStorage.getItem('f1-user');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={isLoggedIn ? <MainSite /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}