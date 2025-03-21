import React from "react";
export const TextInputGroup = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  classLabel,
  className,
}) => {
  return (
    <>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`LogInInput ${className}`}
        required
      />
    </>
  );
};

TextInputGroup.defaultProps = {
  type: "text",
};

export default TextInputGroup;
