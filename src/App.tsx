import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setData, selectProduct } from './utils/productSlice';
import Product from './components/Product';
import SalesGraph from './components/SalesGraph';
import SalesTable from './components/SalesTable';
import './App.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('./stackline_frontend_assessment_data_2021.json');
      dispatch(setData(response.data[0]));
    };

    fetchData();
  }, [dispatch]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="logo-container">
        <img src="./stackline_logo.svg" alt="Stackline Logo" className="logo" />
      </div>
      <Product product={product} />
      {product.sales && (
        <>
          <SalesGraph salesData={product.sales} />
          <SalesTable salesData={product.sales} />
        </>
      )}
    </div>
  );
};

export default App;
