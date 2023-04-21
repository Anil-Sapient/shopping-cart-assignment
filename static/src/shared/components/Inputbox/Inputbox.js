import styles from './Inputbox.module.scss';
export default function Inputbox({ input, handleChange, values, errors }) {
  const { type, placeholder, inputId } = input;

  return (
    <>
      <input
        type={type}
        className={styles.floating_input}
        id={inputId}
        placeholder={placeholder}
        name={inputId}
        value={values}
        onChange={handleChange}
        noValidate
      />
      {errors ? (
        <p className={styles.form_error}>{errors}</p>
      ) : (
        <label htmlFor={inputId} className={styles.floating_label}>
          {placeholder}
        </label>
      )}
    </>
  );
}
