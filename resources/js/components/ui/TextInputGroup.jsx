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
  error
}) => {
  return (
    <>
      <label htmlFor={id} className={`${classLabel}`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`LogInInput ${className} ${error && `border-red-600!`}`}
        />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </>
  );
};

TextInputGroup.defaultProps = {
  type: "text",
};

export default TextInputGroup;
