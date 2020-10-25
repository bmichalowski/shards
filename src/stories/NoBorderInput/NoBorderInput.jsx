import React, { useState } from "react";
import styled from "styled-components";

const defaultValue = "placeholder";

const StyledInput = styled.input`
  border: none;
  outline: none;
  &,
  &::focus,
  &::active {
    border: none;
    outline: none;
  }
`;

export const NoBorderInput = ({ value, onChange, validate, ...otherProps }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = ({ target }) => {
    if (!validate) {
      onChange(target.value);
    } else if (validate(target.value)) {
      onChange(target.value);
    }
  };

  const handleFocus = ({ target }) => {
    setIsActive(true);
    if (target.value === defaultValue) {
      target.value = "";
    }
  };

  const handleBlur = ({ target }) => {
    setIsActive(false);
    if (target.value === "") {
      target.value = defaultValue;
    }
  };

  const getCurrentValue = () =>
    value && value.length ? value : isActive ? "" : defaultValue;

  return (
    <StyledInput
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      value={getCurrentValue()}
    />
  );
};
