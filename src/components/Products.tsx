import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Product from './Product';
import { fetchData } from '../utils/fetchData';

const ProductsWrapper = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const AverageCubicWeight = styled.div`
  margin: 20px 0;
  font-size: 1.2rem;
  color: #e0244a;
`;

const Products = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Air Conditioners');

  const { data, isLoading, isError, isSuccess } = useQuery(
    'products',
    fetchData,
    {
      onSuccess: (data) => {
        const fetchedCategories: string[] = [];
        const delRepeatedCategories: string[] = [];
        if (data && data.data) {
          data.data.map((ob) => fetchedCategories.push(ob.category));
          for (let i = 0; i < fetchedCategories.length; i++) {
            if (delRepeatedCategories.indexOf(fetchedCategories[i]) === -1) {
              delRepeatedCategories.push(fetchedCategories[i]);
            }
          }
          setCategories(delRepeatedCategories);
        }
      },
    }
  );

  const selectedProducts =
    data &&
    data.data &&
    data.data.filter((ob) => ob.category === selectedCategory);

  const averageCubicWeight = () => {
    if (selectedProducts) {
      return (
        selectedProducts
          .map(
            ({ size }) =>
              ((size.height * size.length * size.width) / 1000000) * 250
          )
          .reduce((a, b) => a + b, 0) / selectedProducts.length
      ).toFixed(2);
    }
  };

  return (
    <ProductsWrapper>
      <Label htmlFor="category">Please choose a category:</Label>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error fetching data</div>}
      {isSuccess && (
        <>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <AverageCubicWeight>
            The average cubic weight for{' '}
            <strong>
              <i>{selectedCategory}</i>
            </strong>{' '}
            is {averageCubicWeight() || 0} kg
          </AverageCubicWeight>
          <div>
            {selectedProducts &&
              selectedProducts.map((object) => (
                <Product {...object} key={object.title} />
              ))}
          </div>
        </>
      )}
    </ProductsWrapper>
  );
};

export default Products;
