import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateOrder = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setBody(res.data.body);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body })
      .then(() => {
        alert('Заказ обновлён!');
        navigate('/basket');
      });
  };

  return (
    <div className="pt-32 min-h-screen" style={{ background: 'linear-gradient(#110033, #000)' }}>
      <div className="max-w-2xl mx-auto px-8">
        <h1 className="text-center text-8xl font-black mb-16" style={{ textShadow: '0 0 80px #00ffff' }}>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            РЕДАКТИРОВАТЬ #{id}
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full px-8 py-6 text-2xl bg-black/80 border-4 border-purple-600 rounded-2xl text-white" />
          <textarea value={body} onChange={e => setBody(e.target.value)} required rows={6} className="w-full px-8 py-6 text-2xl bg-black/80 border-4 border-purple-600 rounded-2xl text-white" />
          <div className="text-center">
            <button type="submit" className="px-20 py-8 text-4xl bg-purple-600 hover:bg-purple-700 rounded-full shadow-2xl hover:shadow-purple-600/70 transition">
              СОХРАНИТЬ ИЗМЕНЕНИЯ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateOrder;