import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BaseButton = styled.button`
  height: 44px;
  min-width: 44px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
  padding: 0 12px;

  &:hover:not(:disabled) {
    background: #f9fafb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const NavButton = styled(BaseButton)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const PageButton = styled(BaseButton)<{ $active?: boolean }>`
  min-width: 44px;
  padding: 0;

  background: ${({ $active }) => ($active ? '#111827' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#111827')};
  border-color: ${({ $active }) => ($active ? '#111827' : '#e5e7eb')};

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? '#111827' : '#f9fafb')};
  }
`;

export const Ellipsis = styled.span`
  min-width: 24px;
  text-align: center;
  color: #6b7280;
  font-weight: 700;
`;

export const Summary = styled.p`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
`;
