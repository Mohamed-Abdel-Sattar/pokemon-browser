import styled from 'styled-components';

export const CloseButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 16px;
  font-weight: bold;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
