import { useState, useCallback } from 'react';

export type UseInputType = {
  value: string;
  setValue: (value: string) => void;
  reset: () => void;
};

const useInput = (initialValue: string = ''): UseInputType => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  // 値をリセットする関数
  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    setValue: handleChange,
    reset
  };
};

export default useInput;