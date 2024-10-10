import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import EditProduct from './EditProduct';

function App() {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleCloseEdit = () => {
    setEditingProduct(null);
  };
  return (
    <Provider store={store}>
      <div>
        <h1>Каталог продуктов</h1>
        <AddProduct />
        <ProductList onEdit={handleEdit} />
        {editingProduct && (
          <div>
            <h2>Редактировать продукт</h2>
            <EditProduct product={editingProduct} onClose={handleCloseEdit} />
          </div>
        )}
      </div>
    </Provider>
  );
};

export default App;
