import Button from '@/shared/components/Button/Button';
import Inputbox from '@/shared/components/Inputbox/Inputbox';
import useForm from '@/shared/hooks/useForm';
import validate from '@/shared/utils/validateForm';
import styles from './Form.module.scss';

export default function Form({ className = '', inputLabel, button }) {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <form
      className={`${className} ${styles.form}`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {inputLabel.map((input) => (
        <Inputbox
          key={input.inputId}
          input={input}
          handleChange={handleChange}
          values={values[input.inputId]}
          errors={errors[input.inputId]}
        />
      ))}
      <Button className={styles.form__login_button}>{button}</Button>
    </form>
  );
}
