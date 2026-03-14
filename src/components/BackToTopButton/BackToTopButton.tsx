import { type FC, useEffect, useState } from 'react';

import { Button } from './styles';

const BackToTopButton: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Button $visible={visible} onClick={scrollToTop} aria-label="Back to top">
      ↑
    </Button>
  );
};

export default BackToTopButton;
