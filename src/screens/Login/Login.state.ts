import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';

import { emailValidation, passwordValidation } from 'services/validation';
import { useGoogleButton } from 'hooks/useGoogleButton';

import { login } from './login.api';
import { ILogin } from './types/login.types';
import {
  setCompany,
  setCurrencies,
  setUser,
} from '../SignUp/reducer/signup.reducer';

import { ROUTES } from 'constants/routes';
import { sign } from 'crypto';

interface IuseLoginStateState {
  isShowPassword: boolean;
}

export const useLoginState = () => {
  const initialState = {
    isShowPassword: false,
  };
  const [state, setState] = useState<IuseLoginStateState>(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUpClickHandler = () => {
    navigate(ROUTES.login);
  };

  const onTogglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  const onSignInButtonClickHandler = async (
    loginValues: { email: string; password: string; role: string; },
    actions: FormikHelpers<{ email: string; password: string; role: string; }>
  ) => {
    try {
      const { data } = await login(loginValues);
      dispatch(setCurrencies(data.currencies));
      
      dispatch(setUser(data));
      console.log('signInHit',data.currencies);
      localStorage.setItem('token',data.token);
      localStorage.setItem('RefreshToken',data.refreshToken);
      const Original_token = localStorage.getItem('token');
      const Refresh_Token = localStorage.getItem('RefreshToken')
      // data.company && dispatch(setUserInfo({ company: data.company }));
      // dispatch(setCurrencies(data.currencies));
      // data.company && dispatch(setCompany(data.company));
      // navigate(data.user.data.active === true ? ROUTES.home : ROUTES.login);
      navigate(
        data.user.active === true || Original_token !== Refresh_Token
          ? ROUTES.home
          : ROUTES.login
      );
    } catch (error: any) {
      const { data } = error.response;
      (data.message === 'WRONG PASSWORD' || 'USER NOT EXIST') &&
        actions.setErrors({
          email: ' ',
          password: 'Invalid email or password',
        });
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      role: 'admin', 
    },
    onSubmit: (values, actions) => onSignInButtonClickHandler(values, actions),
    validationSchema: Yup.object().shape({
      email: emailValidation,
      password: passwordValidation,
      role: Yup.string().required('admin'), 
    }),
  });

  const { onGoogleButtonClickHandler, isGoogleLoading } = useGoogleButton();
  return {
    ...state,
    formik,
    isGoogleLoading,
    onGoogleButtonClickHandler,
    onSignUpClickHandler,
    onTogglePasswordVisibility,
  };

  
};

