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
    readOnly = false,
    error,
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
                className={`TextAreaInput scrollbar ${className} ${error && `border-red-600!`}`}
                rows={rows}
                cols={cols}
                style={{ resize: "none" }}
            />
            {error ? <p className="-mt-1 text-sm text-red-600">{error}</p> : null}
        </>
    );
};

TextAreaGroup.defaultProps = {
    rows: 4,
    cols: 50,
};

export default TextAreaGroup;
