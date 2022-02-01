import React from "react";
import styled from "styled-components";
import {
  Link,
  Outlet,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function HeaderNav() {
  return (
    <div>
      <Header>
        <Right></Right>
        <Left>
          <Nav>
            <NavList to="/home">Home</NavList>
            <NavList to="/about">About</NavList>
            <NavList to="/request">Post Request</NavList>
            <NavList to="/getreq">Get Request</NavList>
            <NavList to="/put">Put and Delete</NavList>
            <NavList to="/location">UseLocation</NavList>
            <NavList to="/user/:username  ">User</NavList>
          </Nav>
        </Left>
      </Header>
      <Outlet />
    </div>
  );
}

export default HeaderNav;

const Header = styled.header`
    background: black;
    color: #fff;
    padding: 10px 20px  ;
`;
const Left = styled.div``;
const Right = styled.div``;
const Nav = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: space-between;
`;
const NavList = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;
