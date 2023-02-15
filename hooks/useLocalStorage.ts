import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const initialize = (key: string): T => {
    try {
      const item = localStorage.getItem(key);
      if (item && item !== 'undefined') {
        return JSON.parse(item);
      }

      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const [value, setValueState] = useState<T>(initialValue);

  useEffect(() => {
    setValueState(initialize(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = useCallback(
    (value: T) => {
      try {
        setValueState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    },
    [key]
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  }, [key]);

  return [value, setValue, remove] as const;
}
