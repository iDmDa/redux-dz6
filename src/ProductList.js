import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, toggleAvailability } from './productsSlice';

const ProductList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price} ₽</p>
          <p>Доступен: {product.available ? 'Да' : 'Нет'}</p>
          <button onClick={() => dispatch(removeProduct(product.id))}>Удалить</button>
          <button onClick={() => dispatch(toggleAvailability(product.id))}>
            Переключить доступность
          </button>
          <button onClick={() => onEdit(product)}>Редактировать</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;