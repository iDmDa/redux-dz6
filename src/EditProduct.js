import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './productsSlice';

const EditProduct = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name,
      description,
      price: Number(price),
      available,
    };
    dispatch(updateProduct(updatedProduct));
    onClose();
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
      <button type="submit">Сохранить изменения</button>
      <button type="button" onClick={onClose}>Отмена</button>
    </form>
  );
};

export default EditProduct;