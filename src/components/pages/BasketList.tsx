import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BasketList = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Фейковые товары F1 Movie
    const f1items = [
      { id: 1, title: "Футболка APX GP (чёрная)", price: 3990, img: "https://i.imgur.com/2kL2f8F.jpeg" },
      { id: 2, title: "Кепка Sonny Hayes Edition", price: 2990, img: "https://i.postimg.cc/3xVJ2N7K/damson-idris-f1-movie.jpg" },
      { id: 3, title: "Постер фильма F1 (60x90)", price: 1490, img: "https://www.formula1.com/content/dam/f1/motorsport/latest/2025/06/f1_movie_poster16x9.jpg" },
      { id: 4, title: "Билет на премьеру (Москва)", price: 25000, img: "https://images.alphacoders.com/134/1349568.jpg" },
    ];
    setItems(f1items);
  }, []);

  const deleteItem = (id: number) => {
    if (window.confirm('Убрать из корзины?')) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  return (
    <div className="pt-32 pb-20 px-8" style={{ background: 'radial-gradient(circle at top, #1a0033, #000000)' }}>
      <h1 className="text-center text-8xl font-black mb-16" style={{ textShadow: '0 0 80px #ff0000' }}>
        <span className="bg-gradient-to-r from-red-600 via-cyan-400 to-red-600 bg-clip-text text-transparent">
          КОРЗИНА
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {items.map(item => (
          <div key={item.id} className="group relative bg-black/90 border-4 border-red-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-600/80 transition-all duration-500">
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">{item.title}</h3>
              <p className="text-4xl text-red-500 font-black mb-6">₽{item.price.toLocaleString()}</p>
              <div className="flex gap-4">
                <button onClick={() => deleteItem(item.id)} className="flex-1 px-6 py-4 bg-red-600 hover:bg-red-700 rounded-full text-xl font-bold">
                  Удалить
                </button>
                <Link to={`/basket/${item.id}`} className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full text-xl font-bold">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Link to="/create" className="px-20 py-10 text-5xl bg-gradient-to-r from-red-600 to-cyan-600 rounded-full shadow-2xl hover:shadow-cyan-600/70 transition">
          ДОБАВИТЬ ЕЩЁ МЕРЧ
        </Link>
      </div>
    </div>
  );
};

export default BasketList;