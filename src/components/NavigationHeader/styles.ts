import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  max-width: 1100px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  & a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & img {
    width: 32px;
  }
`;

export const Subtitle = styled.p`
  color: #555;
  margin-bottom: 24px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
`;

export const NavLinkButton = styled(NavLink)`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  text-transform: capitalize;
  background: #eee;
  color: #333;
  cursor: pointer;
  box-shadow: 0 0 3px -1px #00000066;
  &.active {
    background: #111;
    color: #fff;
  }
`;
