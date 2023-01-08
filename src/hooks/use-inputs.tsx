import { useState, ChangeEvent } from 'react';

function useInputs(inputValues: { [key: string]: string }) {
  const [values, setValues] = useState(inputValues);

  const handleValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, setValues, handleValues }
}

export default useInputs;