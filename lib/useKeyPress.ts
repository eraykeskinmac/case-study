import { useEffect } from 'react';

const useKeyPress = (targetKey: string, callback: () => void) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === targetKey && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);
};

export default useKeyPress;
