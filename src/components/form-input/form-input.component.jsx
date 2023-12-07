import "./form-input.style.scss";

const FormInput = (props) => {
  const { label, ...otherProps } = props;
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}

      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
