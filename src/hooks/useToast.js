import { useState, useCallback } from 'react';

export function useToast() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  }, []);

  return { toastMessage, showToast };
}
