import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
      navigate('/basket');
    }
  };

  return (
    <div className="pt-32 min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(#000, #110033)' }}>
      <div className="max-w-lg w-full px-10">
        <h1 className="text-center text-8xl font-black mb-16" style={{ textShadow: '0 0 80px #00ffff' }}>
          <span className="bg-gradient-to-r from-cyan-400 to-red-600 bg-clip-text text-transparent">
            РЕГИСТРАЦИЯ
          </span>
        </h1>
        <form onSubmit={handleRegister} className="space-y-12">
          <input
            type="email"
            placeholder="Твой email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-10 py-8 text-3xl bg-black/80 border-4 border-cyan-600 rounded-3xl text-white placeholder-gray-500 focus:border-red-400 focus:outline-none"
          />
          <button type="submit" className="w-full py-10 text-5xl bg-gradient-to-r from-cyan-600 to-red-600 rounded-full shadow-2xl hover:shadow-red-600/70 transition font-black">
            ПРИСОЕДИНИТЬСЯ К F1
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;