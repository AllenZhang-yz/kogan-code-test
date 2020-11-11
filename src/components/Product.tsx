import React, { FC } from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  padding: 8px 16px;
  background: #1b1b1b;
  margin: 16px 0;
  border-radius: 20px;
  text-align: left;
`;

const Title = styled.div`
  margin: 10px 0;
  color: #ffff57;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Category = styled.div`
  margin: 8px 0;
  color: #fff;
  font-size: 1.2rem;
`;

const Content = styled.div`
  margin: 6px 0;
  color: #999;
  font-size: 0.9rem;
`;

interface ISize {
  width: number;
  length: number;
  height: number;
}

export interface IProduct {
  category: string;
  title: string;
  weight: number;
  size: ISize;
}

const Product: FC<IProduct> = ({ category, title, weight, size }) => {
  const { width, length, height } = size;
  return (
    <ProductWrapper>
      <Title>Title: {title}</Title>
      <Category>Category: {category}</Category>
      <Content>Weight: {weight}</Content>
      <Content>
        Width: {width}, Length: {length}, Height: {height}
      </Content>
    </ProductWrapper>
  );
};

export default Product;
