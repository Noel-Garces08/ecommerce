import React from 'react';

import Product from './Product/Product';
import useStyles from './styles';

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1>Products</h1>
      <Product />
      <Product />
      <Product />
    </main>
  );
};

export default Products;
