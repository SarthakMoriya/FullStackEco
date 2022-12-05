import React from "react";

import styled from "styled-components";
import CategoryItem from "../components/CategoryItem";

import { categories } from "../data";

const Container = styled.div``;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem item={category}/>
      ))}
    </Container>
  );
};

export default Categories;
