import { useState } from 'react';

function useInputs(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleValues = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, setValues, handleValues }
}

export default useInputs;