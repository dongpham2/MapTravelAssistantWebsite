import { CFormInput } from "@coreui/react";

const CInput = ({
  className,
  type,
  value,
  placeholder,
  disabled,
  required,
  readOnly,
  maxLength,
  onChange = () => {},
  onBlur = () => {},
  minValue,
}) => {
  return (
    <CFormInput
      maxLength={maxLength}
      min={minValue}
      className={`input ${className ?? ""}`}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      onBlur={(event) => onBlur(event.target.value)}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

export default CInput;
