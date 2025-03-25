import React from "react";

export const TextAreaGroup = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange = undefined,
  classLabel,
  className,
  rows,
  cols,
  readOnly = false
}) => {
  return (
    <>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <textarea
        readOnly={readOnly}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={readOnly ? undefined : onChange}
        className={`TextAreaInput scrollbar ${className}`}
        required
        rows={rows}
        cols={cols}
        style={{ resize: "none" }}
      />
    </>
  );
};

TextAreaGroup.defaultProps = {
  rows: 4,
  cols: 50,
};

export default TextAreaGroup;
