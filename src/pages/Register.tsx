import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    if (form.password.length < 6) {
      setError('Пароль должен быть не менее 6 символов');
      return;
    }

    // Сохраняем пользователя
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === form.email)) {
      setError('Этот email уже зарегистрирован');
      return;
    }

    const newUser = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    alert('Регистрация успешна!');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="w-full max-w-lg p-10 bg-black/90 border-4 border-red-600 rounded-3xl shadow-2xl">
        <h1 className="text-center text-7xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-400">
          РЕГИСТРАЦИЯ
        </h1>
        {error && <p className="text-red-500 text-center mb-6 text-xl">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            name="firstName"
            type="text"
            placeholder="Имя"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 text-xl bg-gray-900 border-2 border-red-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Фамилия"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 text-xl bg-gray-900 border-2 border-red-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 text-xl bg-gray-900 border-2 border-red-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Телефон"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 text-xl bg-gray-900 border-2 border-red-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 text-xl bg-gray-900 border-2 border-red-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Подтвердите пароль"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 text-xl bg-gray-900 border-2 border-red-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-6 text-4xl font-bold bg-gradient-to-r from-red-600 to-cyan-600 rounded-full shadow-2xl hover:shadow-cyan-600/70 transition"
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </button>
        </form>
        <p className="text-center mt-8 text-xl">
          Уже есть аккаунт? <Link to="/login" className="text-cyan-400 hover:text-cyan-300">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;