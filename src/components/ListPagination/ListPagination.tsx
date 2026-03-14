import type { FC } from 'react';

import { Ellipsis, NavButton, PageButton, PaginationRow, Summary, Wrapper } from './styles';

type Props = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

const ChevronLeft = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const ChevronRight = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const getVisiblePages = (currentPage: number, totalPages: number): (number | 'ellipsis')[] => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 2) {
    return [1, 2, 3, 'ellipsis', totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
};
const ListPagination: FC<Props> = ({ currentPage, totalPages, pageSize, totalItems, onPageChange }) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);
  const shownCount = Math.min(pageSize, totalItems - (currentPage - 1) * pageSize);

  return (
    <Wrapper>
      <PaginationRow>
        <NavButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Go to previous page">
          <ChevronLeft />
          Previous
        </NavButton>

        {visiblePages.map((item, index) =>
          item === 'ellipsis' ? (
            <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
          ) : (
            <PageButton
              key={item}
              $active={item === currentPage}
              onClick={() => onPageChange(item)}
              aria-current={item === currentPage ? 'page' : undefined}
              aria-label={`Go to page ${item}`}
            >
              {item}
            </PageButton>
          )
        )}

        <NavButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Go to next page">
          Next
          <ChevronRight />
        </NavButton>
      </PaginationRow>

      <Summary>
        Page {currentPage} of {totalPages} ({shownCount} Pokemon shown)
      </Summary>
    </Wrapper>
  );
};

export default ListPagination;
