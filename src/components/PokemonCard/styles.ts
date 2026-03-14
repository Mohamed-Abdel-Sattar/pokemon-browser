import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '@/styles.ts';

export const Card = styled(Link)`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  padding: 16px;
  text-align: center;
  text-decoration: none;
  color: ${theme.colors.black};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 288px;
  min-height: 346px;

  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`;
export const ImageWrapper = styled.header`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${theme?.colors.cardImage};
`;

export const Name = styled.h3`
  margin: 10px 0 4px;
  text-transform: capitalize;
`;

export const Id = styled.p`
  color: ${theme?.colors.cardId};
  font-size: 14px;
`;
