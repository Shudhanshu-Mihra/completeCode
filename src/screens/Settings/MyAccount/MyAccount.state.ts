import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionMeta, SingleValue } from "react-select";
import { useFormik } from "formik";

import { IState } from "services/redux/reducer";
import { getFormatedCurrencies } from "services/utils";
import {
  bindSocialAccdValidationSchema,
  myAccountValidationScheme,
  resetPasswordValidationScheme,
} from "services/validation";
import { useToggle } from "hooks/useToggle";
import {
  getInputFields,
  getResetPasswordInputFields,
  resetPasswordFormikInitialValues,
} from "./MyAccount.constants";
import {
  getProfile,
  linkSocialAccount,
  resetPassword,
  // updateProfile,
} from "./myAccount.api";

import {
  // setGoogleSocialAccount,
  updateUser,
  updateUserProfile,
} from "../../SignUp/reducer/signup.reducer";


import { IFormikValues } from "components/BindSocialAccountInputs/bindSocialAccountInputs.types";
import { DATE_FORMATS } from "constants/strings";
import { IResetPasswordFields } from "./types/MyAccount.types";

import { countries } from 'constants/countries-array';

interface IuseMyAccountState {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  currency: SingleValue<IOption> | any;
  dateFormat: SingleValue<IOption> | any;
  country: SingleValue<IOption> | any;
}

export const useMyAccountState = () => {
  const {
    user: {
      token,
      user,
  
    },
  } = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const date_format = "MMM-dd-yyyy";
  const formatedCurrencies = getFormatedCurrencies(user.currencies);
  // const currentCurrency = formatedCurrencies?.find(
  //   (item) => item?.id === currency?.id
  // );
  const currentCurrency = formatedCurrencies?.find(
    (item) => item?.id === item?.id
  );
  const currentDate = DATE_FORMATS.find((item) => item.value === date_format);
  // const currentCountry = countries.find((item) => item.value === user.country);

  const prevValues = {
    // currency: currentCurrency,
    dateFormat: currentDate,
    // country: currentCountry,
    fullName: user.name,
    email: user.email,
  };

  const MY_ACCOUNT_initialState = {
    currency: currentCurrency,
    dateFormat: currentDate,
    country: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  // const passinitialState = {
  //   currentpassword:'',
  //   newpassword: '',
  //   confirmPassword : '',
    
  // };
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const formikInitialValues = {
    name: user.name || "",
    email: user.email || "",
    currencies: user.currencies,
  };

  const linkSocAccFormikInitialValues = {
    name: user.name || "",
    email: user.email || "",
    newPassword: "",
    confirmPassword: "",
  };
  const [isForgetPasswordModalOpen, setForgetPasswordModalOpen] =
    useState(false);

  const openForgetPasswordModal = () => {
    setForgetPasswordModalOpen(true);
  };

  const closeForgetPasswordModal = () => {
    setForgetPasswordModalOpen(false);
  };

  const [state, setState] = useState<IuseMyAccountState>(MY_ACCOUNT_initialState);
  const [isResetPassword, setIsResetPassword] = useToggle();
  const [isShowCurrentPassword, setIsShowCurrentPassword] = useToggle();
  const [isShowNewPassword, setIsShowNewPassword] = useToggle();
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useToggle();
  const [isShowSuccesPopup, setIsShowSuccesPopup] = useToggle();
  const [isLinkSocAccWindowOpen, setLinkSocAccWindowToggle] = useToggle();
  const [isCreatingAcc, setIsCreatingAcc] = useState(false);
  const [countryValue, setCountryValue] = useState({
    value: "United Kingdom",
    label: "United Kingdom",
  });

  const onChangeLinkedCountryValueHandler = (
    newValue: IOption | any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => setCountryValue(newValue);

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => updateUserProfileHandler(values),
    validationSchema: myAccountValidationScheme,
    validateOnBlur: true,
  });

  const onChangeStateFieldHandler = (
    optionName: keyof typeof MY_ACCOUNT_initialState,
    value: string | boolean | SingleValue<IOption>
  ) => {
    //   setState((prevState) => ({
    //     ...prevState,
    //     [optionName]: value,
    //   }));
  };

  const onChangeCountryValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('country', newValue);

  const onChangeCurrencyValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('currency', newValue);

  const onChangeDateFormatValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('dateFormat', newValue);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void
    formik.handleChange(event);

  const formikResetPassword = useFormik({
    initialValues: state,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log('Collected Data:', values);
      // Call the handler passed as a prop with the form values
      onSaveNewPasswordHandler(values);
    },
  });

  const resetPasswordFormik = useFormik({
    initialValues: resetPasswordFormikInitialValues,
    onSubmit: (values) => onSaveNewPasswordHandler(values),
    validationSchema: resetPasswordValidationScheme,
    validateOnBlur: true,
  });

  // const resetPasswordFormik = useFormik({
  //   initialValues: {
  //     currentPassword: '', 
  //     confirmPassword: '',
  //   },
  
  // const linkSocAccFormik = useFormik({
  //   initialValues: linkSocAccFormikInitialValues,
  //   onSubmit: (values) => onLinkSocAccHandler(values),
  //   validationSchema: bindSocialAccdValidationSchema,
  // });

  const getProfileHandler = async () => {
    try {
      setIsFetchingData(true);
      const { data } = await getProfile(user.active || false, user.id);
      dispatch(updateUserProfile(data));
      setIsFetchingData(false);
    } catch (error) {
      setIsFetchingData(false);
      console.log(error);
    }
  };

  const onSaveNewPasswordHandler = async (
    resetPasswordValues: typeof resetPasswordFormikInitialValues
  ) => {
    try {
      setIsLoading(true);
      const payload = {
        password: resetPasswordValues.currentPassword,
        newPassword: resetPasswordValues.confirmPassword,
      };
      const { data } = await resetPassword(payload);
      if (data.message === "The password has been updated") {
        setIsShowSuccesPopup();
      }
      resetPasswordFormik.resetForm();
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      const { data } = error.response;
      data.message === "Password is required" &&
        resetPasswordFormik.setErrors({
          currentPassword: "Please enter current password",
        });
      data.message === "Wrong password" &&
        resetPasswordFormik.setErrors({
          currentPassword: "Please enter correct password",
        });
      setIsLoading(false);
    }
  };

  const isEqualFields =
    resetPasswordFormikInitialValues.confirmPassword ===
      resetPasswordFormik.values.confirmPassword &&
    resetPasswordFormikInitialValues.currentPassword ===
      resetPasswordFormik.values.currentPassword &&
    resetPasswordFormikInitialValues.newPassword ===
      resetPasswordFormik.values.newPassword;

  const resetPasswordHandler = () => {
    if (!isEqualFields) {
      resetPasswordFormik.setValues(resetPasswordFormikInitialValues);
    }
    setIsResetPassword();
  };

  // const onCancelbuttonClickHandler = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     currency: currentCurrency,
  //     dateFormat: currentDate,
  //     // country: currentCountry,
  //   }));
  //   formik.setValues({ name: user.name, email: user.email});
  // };

  const onLinkSocAccHandler = async (
    values: typeof linkSocAccFormikInitialValues
  ) => {
    try {
      setIsCreatingAcc(true);
      const payload = {
        country: countryValue.value,
        newPassword: values.newPassword,
        email: values.email,
      };

      await linkSocialAccount(payload);
      // dispatch(
      //   setGoogleSocialAccount({
      //     accData: { ...socialAccount.google },
      //     isLinkedSocAcc: false,
      //   })
      // );
      // dispatch(updateUser({ ...user, country: countryValue.value }));
      // onChangeStateFieldHandler('country', countryValue);
      setLinkSocAccWindowToggle();
      setIsShowSuccesPopup();
      setIsCreatingAcc(false);
    } catch (err) {
      setLinkSocAccWindowToggle();
      setIsCreatingAcc(false);
      console.log(err);
    }
  };

  const updateUserProfileHandler = async (
    formikValues: typeof formikInitialValues
  ) => {
    try {
      setIsLoading(true);
      const payload = !user.active
        ? {
            fullName: formikValues.name,
            email: formikValues.email,
            country: state.country.value,
          }
        : {
            fullName: formikValues.name,
            email: formikValues.email,
            country: state.country.value,
            currency: state.currency.id,
            date_format: state.dateFormat.value,
            active_account: user.active,
          };
      // const { data } = await updateProfile(payload);
      // dispatch(updateUserProfile(data));
      setIsShowSuccesPopup();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const resetPasswordFields = getResetPasswordInputFields({
    isShowPassword: {
      isShowCurrentPassword,
      isShowNewPassword,
      isShowConfirmPassword,
    },
    funcsArray: [
      setIsShowCurrentPassword,
      setIsShowNewPassword,
      setIsShowConfirmPassword,
    ],
  });

  const accountsFields = getInputFields({
    isDisabledCountry: true,
    isDisabledSelect: !user.active ? true : false,
    countries,
    formatedCurrencies,
    dateFormats: DATE_FORMATS,
    funcArray: [
      onChangeCurrencyValueHandler,
      onChangeDateFormatValueHandler,
      onChangeCountryValueHandler,
      onChangeInput,
    ],
    state,
  });

  const isDisableUpdateUserProfileButton =
    // state.country?.value === prevValues?.country?.value &&
    // state.currency?.value === prevValues?.currency?.value &&
    state.dateFormat?.value === prevValues?.dateFormat?.value &&
    formik.values.name === prevValues.fullName &&
    formik.values.email === prevValues.email;

  // const onHandler = isResetPassword
  //   ? resetPasswordFormik.handleSubmit
  //   : formik.handleSubmit;
  // const onSubmitHandler = isResetPassword
  //   ? resetPasswordFormik.handleSubmit
  //   : formik.handleSubmit;


    const onSubmitHandler = async() => {
      const { currentPassword, newPassword } = resetPasswordFormik.values;
      const payload = {
        password: currentPassword,
        newPassword:newPassword,
      };
      await resetPassword(payload);
    };
  const isEmptyResetPasswordFields =
    !resetPasswordFormik.values.confirmPassword &&
    !resetPasswordFormik.values.newPassword;

  const isDisabledButton = isResetPassword
    ? !resetPasswordFormik.isValid || isEmptyResetPasswordFields || isLoading
    : !formik.isValid || isDisableUpdateUserProfileButton || isLoading;

  //  const isLinkSocialAccButton =
  //    !socialAccount.isLinkedSocAcc && socialAccount.google.id;
  const resetPasswordArr: IResetPasswordFields[] = [
    {
      name: 'currentPassword',
      type: 'password',
      label: 'Current Password',
      value:  state.currentPassword,
      isShowPassword: isShowCurrentPassword,
      onToggleVisibility: () => { },
      onInputChange: onChangeStateFieldHandler,
      ShowPasswordHandler:setIsShowCurrentPassword
    },
    {
      name: 'newPassword',
      type: 'password',
      label: 'New Password',
      value: state.newPassword,
      isShowPassword: isShowNewPassword,
      onToggleVisibility: () => { },
      onInputChange: onChangeStateFieldHandler,
      ShowPasswordHandler:setIsShowNewPassword
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      value: state.confirmPassword,
      isShowPassword: isShowConfirmPassword,
      onToggleVisibility: () => { },
      onInputChange: onChangeStateFieldHandler,
      ShowPasswordHandler:setIsShowConfirmPassword
    },
  ];
  
  const validate = (values: IResetPasswordFields[]) => {
    const errors: Partial<IResetPasswordFields>[] = [];
    // Validation logic here, e.g., check for empty fields
    return errors;
  };

//  const passwordFormik = useFormik({
//     initialValues:passFormikInitialValue,
//     validateOnBlur:true,
//     onSubmit: (values) => {
//       console.log("password formik was called!")
      
//     },
//   });

  const UpdatingPassword = async() => {
    const payload = {
      password:  resetPasswordFormik.values.currentPassword,
      newPassword: resetPasswordFormik.values.newPassword,
    };
    console.log(payload);
    resetPassword(payload);
  };

  return {
    ...state,
    isFetchingData,
    isLoading,
    isCreatingAcc,
    countryValue,
    isLinkSocAccWindowOpen,
    UpdatingPassword,
    // linkSocAccFormik,
    setLinkSocAccWindowToggle,
    isShowNewPassword,
    setIsShowNewPassword,
    isShowConfirmPassword,
    setIsShowConfirmPassword,
    onChangeLinkedCountryValueHandler,
    onSubmitHandler,
    // onHandler,
    setIsResetPassword,
    getProfileHandler,
    // onCancelbuttonClickHandler,
    // resetPasswordHandler,
    setIsShowSuccesPopup,
    // isLinkSocialAccButton,
    isShowSuccesPopup,
    isDisabledButton,
    formik,
    resetPasswordFormik,
    isResetPassword,
    accountsFields,
    resetPasswordFields,

    user,
    // isDisableUpdateUserProfileButton,
    isForgetPasswordModalOpen,
    setForgetPasswordModalOpen,
    // passwordFormik,
    // passFormikInitialValue,
    resetPasswordArr,
    formikResetPassword,
    closeForgetPasswordModal
  };
};
