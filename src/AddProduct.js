import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: Number(price),
      available,
    };
    dispatch(addProduct(newProduct));
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Имя продукта" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Описание" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Цена" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
      />
      <label>
        Доступен:
        <input 
          type="checkbox" 
          checked={available} 
          onChange={() => setAvailable(!available)} 
        />
      </label>
      <button type="submit">Добавить продукт</button>
    </form>
  );
};

export default AddProduct;