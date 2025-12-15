import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email);

    if (!user) {
      setError('Пользователь не найден');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="w-full max-w-md p-10 bg-black/90 border-4 border-red-600 rounded-3xl shadow-2xl">
        <h1 className="text-center text-7xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-400">
          ВХОД
        </h1>
        {error && <p className="text-red-500 text-center mb-6 text-xl">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-5 text-xl bg-gray-900 border-2 border-red-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-6 text-4xl font-bold bg-gradient-to-r from-red-600 to-cyan-600 rounded-full shadow-2xl hover:shadow-cyan-600/70 transition"
          >
            ВОЙТИ
          </button>
        </form>
        <p className="text-center mt-8 text-xl">
          Нет аккаунта? <Link to="/register" className="text-cyan-400 hover:text-cyan-300">Регистрация</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;