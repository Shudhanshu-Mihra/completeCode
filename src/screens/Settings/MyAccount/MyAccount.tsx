import { FC, useEffect } from 'react';
import {theme} from '../../../styles/theme';
import { LoaderComponent } from 'components/Loader';
import { SuccessPopup } from 'components/SuccessPopup';
import { LinkSocAccModalWindow } from 'components/LinkSocAccModalWindow';

import { useMyAccountState } from './MyAccount.state';
import { MyAccountStyles as Styled } from './MyAccount.style';
import { Buttons } from './Buttons';
import { AccountFields } from './AccountFields';
import { FormButtonPanel } from 'components/FormButtonPanel';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';
import { PasswordChangeModelWindow } from './PasswordChangeModelWindow/PasswordChangeModelWindow';
import { string } from 'yup';


export const MyAccount: FC = () => {
  const {
    accountsFields,
    isResetPassword,
    resetPasswordFields,
    isFetchingData,
    formik,
    isLoading,
    resetPasswordFormik,
    isDisabledButton,
    isShowSuccesPopup,
    isShowNewPassword,
    isShowConfirmPassword,
    // linkSocAccFormik,
    countryValue,
    // isLinkSocialAccButton,
    isLinkSocAccWindowOpen,
    isCreatingAcc,
    setLinkSocAccWindowToggle,
    setIsShowNewPassword,
    setIsShowConfirmPassword,
    onChangeLinkedCountryValueHandler,
    setIsShowSuccesPopup,
    // onCancelbuttonClickHandler,
    getProfileHandler,
    setIsResetPassword,
    // resetPasswordHandler,
    onSubmitHandler,
    // onHandler,
    isForgetPasswordModalOpen,
    setForgetPasswordModalOpen,
    UpdatingPassword,
    // passwordFormik,
    closeForgetPasswordModal,
    // passFormikInitialValue,
    resetPasswordArr,
    formikResetPassword,
  } = useMyAccountState();

  useEffect(() => {
    getProfileHandler();
  }, []);

  return (
    <Styled.LayoutWrapper>
      {/* <LinkSocAccModalWindow
        isLoading={isCreatingAcc}
        isModalWindowOpen={isLinkSocAccWindowOpen}
        onCloseModalWindowHandler={setLinkSocAccWindowToggle}
        onChangeCountryValueHandler={onChangeLinkedCountryValueHandler}
        onFormHandleSubmit={linkSocAccFormik.handleSubmit}
        setIsShowConfirmPassword={setIsShowConfirmPassword}
        setIsShowPassword={setIsShowNewPassword}
        onChange={linkSocAccFormik.handleChange}
        onBlur={linkSocAccFormik.handleBlur}
        isValid={linkSocAccFormik.isValid && linkSocAccFormik.dirty}
        isShowConfirmPassword={isShowConfirmPassword}
        isShowPassword={isShowNewPassword}
        values={linkSocAccFormik.values}
        errors={linkSocAccFormik.errors}
        touched={linkSocAccFormik.touched}
        countryValue={countryValue}
      /> */}
       <SuccessPopup
        positionTop="0"
        isShowPopup={isShowSuccesPopup}
        closePopupFc={setIsShowSuccesPopup}
        titleText={
          // isLinkSocialAccButton
          //   ? 'The social account has been successfully linked'
            isResetPassword
            ? 'The password has been successfully changed'
            : 'User profile has been successfully changed'
        }
      />  
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <Styled.ContentWrapper isResetPassword={isResetPassword}>
          <Styled.Form onSubmit={onSubmitHandler}>
            <AccountFields
              isResetPassword={isResetPassword}
              // resetPasswordFields={resetPasswordFields}
              formikProps={formik.getFieldProps}
              formikMeta={formik.getFieldMeta}
              resetPasswordFormikProps={resetPasswordFormik.getFieldProps}
              resetPasswordFormikMeta={resetPasswordFormik.getFieldMeta}
              accountsFields={accountsFields}
              
            />
            <PasswordChangeModelWindow
                isOpen={isForgetPasswordModalOpen}
                onRequestClose={closeForgetPasswordModal}
                isLoading={false}
                {...resetPasswordFormik}
                resetPasswordArr={resetPasswordArr}
                formikResetPassword={formikResetPassword}
                formikProps={formikResetPassword.getFieldProps}
                formikMeta={formikResetPassword.getFieldMeta}
                // isDisabledButton = {isDisabledButton}
                // isCancelButton={isResetPassword} 
            />
             {/* <Buttons
              settingsButtonText={
                isLinkSocialAccButton
                  ? 'Link Social Account'
                  : isResetPassword
                  ? 'Settings'
                  : 'Reset Password'
              }
              onClickSettingsButtonHandler={
                isLinkSocialAccButton
                  ? setLinkSocAccWindowToggle
                  : isResetPassword
                  ? onSettingsClickButtonHandler
                  : setIsResetPassword
              }
              onCancelbuttonClickHandler={onCancelbuttonClickHandler}
              isDisabledButton={isDisabledButton}
              isLoading={isLoading}
              isCancelButton={isResetPassword}
            />  */}
            <FormButtonPanel>
              
              <ReUseActionButton displayText='Reset Password' buttonType='text-link' onClick={()=>{setForgetPasswordModalOpen(true)}} displayIconType='resetIcon' fontSize='18px' customColor={`${theme.colors.red}`} />

              <ReUseActionButton displayText='Cancel' buttonType='actionButton' 
              onClick={()=>{setForgetPasswordModalOpen(false)}}widthType='roundedBig' margin='0 0 0 auto' themedButton='roundedWhite'/>

              <ReUseActionButton displayText='update' buttonType='actionButton'
              widthType='rounded'  themedButton='roundedRed'/>
            </FormButtonPanel>
          </Styled.Form>
        </Styled.ContentWrapper>
      )} 
    </Styled.LayoutWrapper>
  );
};
