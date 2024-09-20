import React, { FC } from 'react';
import Modal from 'react-modal';
import { useFormik, FieldInputProps, FieldMetaProps } from 'formik';
import { ResetPasswordField } from '../ResetPasseordFields/ResetPasswordField';
import { IResetPasswordFields } from '../types/MyAccount.types';
import {
  PasswordChangeModel,
  LinkSocaAccModalWindowStyles as Styled,
} from './PasswordChangeModelWindow.style';
import { ModalButtonsBox } from 'components/ModalButtonsBox';
import { IGetResetPasswordFields } from '../types/MyAccount.types';
import { FieldItem } from '../FieldItem';
import { ReactComponent as Close } from 'assets/icons/close.svg';
interface ForgetPasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isLoading: boolean;
  resetPasswordArr: IResetPasswordFields[];
  formikResetPassword: ReturnType<any>;
  // isDisabledButton:boolean;
  // isCancelButton:boolean;
  // passwordFormArr: ReturnType<typeof passwordFormArr1>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
}


// Example initial values, ensure this matches the type and structure you need


export const PasswordChangeModelWindow: FC<ForgetPasswordModalProps> = ( { isOpen, onRequestClose , isLoading , formikMeta,
  formikProps, resetPasswordArr,formikResetPassword}) => {
  // Set up Formik for the reset password form
 //isDisabledButton, isCancelButton 

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={PasswordChangeModel}>
      {/* <form onSubmit={onFormHandleSubmit}> */}

      <Styled.MainContentWrapper>
        <h2>Reset Password</h2>
        <Styled.CloseIconWrapper>
          <Close width={20} onClick={onRequestClose} />
          </Styled.CloseIconWrapper>
        {/* <ResetPasswordField 
          resetPasswordFields={formik.values}
          resetPasswordFormikProps={formik.getFieldProps}
          resetPasswordFormikMeta={formik.getFieldMeta}
        /> */}
      {resetPasswordArr.map((item) => (
      <FieldItem
        key={item.label}
        showPassword={item.isShowPassword}
        onClickShowPassword={item.ShowPasswordHandler}
        inputName={item.name}
        inputType={item.type}
        labelText={item.label}
        formikMeta={formikMeta}
        formikProps={formikProps}
        // formikMeta={resetPasswordFormikMeta}
        // formikProps={resetPasswordFormikProps}
      />
    ))}
        {/* <button onClick={onRequestClose}>Close</button> */}
      </Styled.MainContentWrapper>
      <ModalButtonsBox
          isLoading={isLoading}
          onCancelClickHandler={onRequestClose}
          onSaveButtonCLickHandler={formikResetPassword.handleSubmit} 
          isSaveButton
          // isDisableButton={isDisabledButton}
          // isCancelButton = {isCancelButton}
        />
      {/* </form> */}

    </Modal>
  );
};