import WrapperText from '@/shared/components/WrapperText/WrapperText';
import Form from '@/shared/components/Form/Form';
import styles from './Signin.module.scss';

export default function Signin() {
  const inputLabel = [
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
  ];

  return (
    <main className={styles.login_container}>
      <WrapperText
        className={styles.login_container__article}
        title={'Login'}
        description={'Get Access to your Orders, Wishlist and Recommendations'}
      />
      <Form
        inputLabel={inputLabel}
        button={'Login'}
        className={styles.login_container__form}
      />
    </main>
  );
}
