import styled, { keyframes } from 'styled-components';

import { theme } from '@/styles.ts';

const pulse = keyframes`
  0% { opacity:0.6 }
  50% { opacity:1 }
  100% { opacity:0.6 }
`;

export const Card = styled.article`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 288px;
  min-height: 346px;
  flex: 0 0 auto;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: ${theme?.colors.skeleton};
  border-radius: 6px;
  animation: ${pulse} 1.5s infinite;
`;

export const Text = styled.div`
  height: 12px;
  background: ${theme?.colors.skeleton};
  margin-top: 10px;
  border-radius: 4px;
  animation: ${pulse} 1.5s infinite;
`;
