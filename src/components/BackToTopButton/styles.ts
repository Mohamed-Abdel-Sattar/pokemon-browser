import styled from 'styled-components';

export const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 32px;
  right: 32px;

  width: 44px;
  height: 44px;

  border: none;
  border-radius: 50%;

  background: #111827;
  color: white;

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #1f2937;
  }
`;
