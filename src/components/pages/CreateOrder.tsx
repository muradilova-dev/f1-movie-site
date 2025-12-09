import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  const [product, setProduct] = useState('');
  const [size, setSize] = useState('M');
  const navigate = useNavigate();

  const products = [
    "Футболка APX GP", "Кепка Sonny Hayes", "Постер фильма", "Модель машины APX GP", "Кружка F1 Movie"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Добавлено в корзину: ${product} (размер ${size})`);
    navigate('/basket');
  };

  return (
    <div className="pt-32 min-h-screen" style={{ background: 'linear-gradient(#000, #110033)' }}>
      <div className="max-w-3xl mx-auto px-8">
        <h1 className="text-center text-8xl font-black mb-16" style={{ textShadow: '0 0 80px #ff0000' }}>
          <span className="bg-gradient-to-r from-cyan-400 to-red-600 bg-clip-text text-transparent">
            ДОБАВИТЬ В КОРЗИНУ
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-12">
          <select value={product} onChange={e => setProduct(e.target.value)} required 
                  className="w-full px-10 py-8 text-3xl bg-black/80 border-4 border-red-600 rounded-3xl text-white">
            <option value="">Выберите товар</option>
            {products.map(p => <option key={p}>{p}</option>)}
          </select>
          
          <div className="grid grid-cols-5 gap-6">
            {['S','M','L','XL','XXL'].map(s => (
              <label key={s} className="text-center">
                <input type="radio" name="size" value={s} checked={size===s} onChange={e=>setSize(e.target.value)}
                       className="hidden" />
                <div className={`py-6 text-3xl border-4 rounded-2xl cursor-pointer transition-all
                  ${size===s ? 'border-cyan-400 bg-cyan-400/20 shadow-2xl shadow-cyan-400/50' : 'border-red-600'}`}>
                  {s}
                </div>
              </label>
            ))}
          </div>

          <div className="text-center">
            <button type="submit" className="px-32 py-12 text-5xl bg-gradient-to-r from-red-600 to-cyan-600 rounded-full shadow-2xl hover:shadow-cyan-600/70 transition font-black">
              ДОБАВИТЬ ЗА ₽4990
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;