import WrapperText from '@/shared/components/WrapperText/WrapperText';
import Form from '@/shared/components/Form/Form';
import styles from './Register.module.scss';

export default function Register() {
  const inputLabel = [
    {
      type: 'text',
      placeholder: 'First Name',
      inputId: 'firstName',
    },
    {
      type: 'text',
      placeholder: 'Last Name',
      inputId: 'lastName',
    },

    {
      type: 'email',
      placeholder: 'Email',
      inputId: 'email',
    },
    {
      type: 'password',
      placeholder: 'Password',
      inputId: 'password',
    },
    {
      type: 'password',
      placeholder: 'Confirm Password',
      inputId: 'confirmPassword',
    },
  ];

  return (
    <main className={styles.register_container}>
      <WrapperText
        className={styles.register_container__article}
        title={'SignUp'}
        description={'We do not share your personal details'}
      />
      <Form
        inputLabel={inputLabel}
        button={'SignUp'}
        className={styles.register_container__form}
      />
    </main>
  );
}
