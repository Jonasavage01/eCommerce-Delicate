import React, { useState } from 'react';
import HeroShop from '../components/HeroShop';
import ProductsShop from '../components/ProductsShop';
import Pagination from '../components/Paginations';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Cambia este valor según sea necesario
  const totalProducts = 8; // Actualiza esto con el número total de productos que tienes
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <HeroShop />
      <ProductsShop currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default Shop;
