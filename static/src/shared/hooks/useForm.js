import { ROUTES } from '@/shared/utils/routerConstant';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useForm(validate) {
  const router = useRouter();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      if (router.pathname === ROUTES.LOGIN.ROUTE) {
        const { email = '', password = '' } = errors;
        if (!email && !password) {
          router.push(ROUTES.HOME.ROUTE);
        }
      }
      if (Object.keys(errors).length === 0) {
        router.push(ROUTES.HOME.ROUTE);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { handleChange, values, errors, handleSubmit };
}
