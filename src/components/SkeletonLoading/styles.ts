import styled, { keyframes } from 'styled-components';

import { theme } from '@/styles.ts';

const pulse = keyframes`
  0% { opacity:0.6 }
  50% { opacity:1 }
  100% { opacity:0.6 }
`;

export const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  height: 346px;
  @media (min-width: ${theme.breakpoints.mobileLg}) {
    height: 706px;
  }
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
