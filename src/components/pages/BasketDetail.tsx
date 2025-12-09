import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BasketDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setOrder(res.data));
  }, [id]);

  if (!order) return <div className="text-center pt-48 text-6xl text-red-600">Загрузка...</div>;

  return (
    <div className="pt-32 min-h-screen" style={{ background: 'linear-gradient(#000, #110033)' }}>
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-center text-8xl font-black mb-16" style={{ textShadow: '0 0 80px #ff0000' }}>
          <span className="bg-gradient-to-r from-red-600 to-cyan-400 bg-clip-text text-transparent">
            Заказ #{order.id}
          </span>
        </h1>
        <div className="bg-black/80 border-4 border-red-600 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl text-cyan-400 mb-8">{order.title}</h2>
          <p className="text-2xl text-gray-300 leading-relaxed">{order.body}</p>
          <div className="text-center mt-12">
            <Link to="/basket" className="px-16 py-6 text-3xl bg-red-600 hover:bg-red-700 rounded-full">
              ← Назад в корзину
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketDetail;