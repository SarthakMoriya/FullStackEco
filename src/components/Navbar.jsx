import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  font-size: 30px;
`;

const Logo = styled.div`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content: flex-end;
  `;
  
  const MenuItem = styled.div`
  font-size: 14px;
  margin-left:25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:'gray',fontSize:'16px'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Bamazon</Logo>
        </Center>
        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingBagIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
