import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    text-transform: capitalize;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:500;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shiping on orders over $50
    </Container>
  );
};

export default Announcement;
