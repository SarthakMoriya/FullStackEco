import React from 'react'
import styled from 'styled-components'

const Container=styled.div``;

const CategoryItem = ({item}) => {
  return (
   <Container>
    {item.id}
   </Container>
  )
}

export default CategoryItem