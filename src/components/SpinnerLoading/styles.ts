import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 40px 0;
  &.above {
    position: sticky;
    width: 100%;
    height: calc(100vh - 250px);
    margin-bottom: calc((100vh - 250px) * -1);
    top: 0;
  }
`;

export const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #76b39a;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #6b7280;
  text-transform: capitalize;
`;
