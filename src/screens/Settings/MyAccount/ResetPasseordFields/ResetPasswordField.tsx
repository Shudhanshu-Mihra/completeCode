// ResetPasswordFields.tsx
import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { FieldItem } from '../FieldItem';
import { IResetPasswordFields } from '../types/MyAccount.types';
import { AccountFieldsStyle as Styled } from '../AccountFields/AccountFields.style';

interface IResetPasswordFieldsProps {
  resetPasswordFields: IResetPasswordFields[];
  resetPasswordFormikProps: (nameOrOptions: string) => FieldInputProps<string>;
  resetPasswordFormikMeta: (name: string) => FieldMetaProps<string>;
}

export const ResetPasswordField: FC<IResetPasswordFieldsProps> = ({ resetPasswordFields, resetPasswordFormikProps, resetPasswordFormikMeta }) => (
  <Styled.ResetPasswordFiledsWrapper>
    {resetPasswordFields.map((item) => (
      <FieldItem
        key={item.label}
        showPassword={item.isShowPassword}
        onClickShowPassword={item.onToggleVisibility}
        inputName={item.name}
        inputType={item.type}
        labelText={item.label}
        formikMeta={resetPasswordFormikMeta}
        formikProps={resetPasswordFormikProps}
      />
    ))}
  </Styled.ResetPasswordFiledsWrapper>
);
