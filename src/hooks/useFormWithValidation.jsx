import { useState, useCallback } from "react";
import isEmail from "validator/es/lib/isEmail";

const useFormWithValidation = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

const handleChange = (evt) => {
    const input = evt.target;
    const { value, name } = input;
    let validationMessage = "";

    if (name === "name" && input.validity.patternMismatch) {
        validationMessage = "Поле должно содержать только латиницу, кириллицу, пробелы или дефисы.";
    }

    if (input.validity.valueMissing) {
      validationMessage = "Поле обязательно к заполнению."
    }
    
    if (input.validity.tooShort) {
      validationMessage = "Минимальное количество символов: 2."
    }

    if (input.validity.tooLong) {
      validationMessage = "Максимальное количество символов: 30."
    }

    if (name === "email") {
        if (!isEmail(value)) {
            validationMessage = "Некорректый адрес почты.";
        }
    }

    input.setCustomValidity(validationMessage);

    setValues({
        ...values,
        [input.name]: input.type === "checkbox" ? input.checked : input.value,
    });

    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(input.closest("form").checkValidity());
};

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return { values, errors, isValid, handleChange, resetForm, setIsValid };
};

export default useFormWithValidation;
