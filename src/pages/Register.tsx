import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register } from useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(email, password, name)) {
      navigate('/');
    }
  };

  return (
    <div className="pt-32 min-h-screen" style={{ background: 'linear-gradient(#000, #110033)' }}>
      <div className="max-w-md mx-auto px-8">
        <h1 className="text-center text-8xl font-black mb-16" style={{ textShadow: '0 0 80px #00ffff' }}>
          <span className="bg-gradient-to-r from-cyan-400 to-red-600 bg-clip-text text-transparent">
            РЕГИСТРАЦИЯ
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          <input
            type="text"
            placeholder="Имя (опционально)"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-8 py-6 text-2xl bg-black/80 border-4 border-cyan-600 rounded-2xl text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-8 py-6 text-2xl bg-black/80 border-4 border-cyan-600 rounded-2xl text-white"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-8 py-6 text-2xl bg-black/80 border-4 border-cyan-600 rounded-2xl text-white"
          />
          <button type="submit" className="w-full py-8 text-4xl bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-2xl">
            ЗАРЕГИСТРИРОВАТЬСЯ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;