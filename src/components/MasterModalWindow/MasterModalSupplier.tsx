import { FC } from "react";
import ReactModal from "react-modal";

import { Input } from "../Input";
import { ModalButtonsBox } from "../ModalButtonsBox";
import { ModalWindowHeader } from "../ModalWindowHeader";
import {
  MasterModalWindowStyles as Styled,
  MasterModalStyles,
} from "./MasterModalWindowAcc.style";

export const MasterModalSupplier: FC<IMasterModalSupplierProps> = (props) => {
  const {
    isModalWindowOpen,
    headerText,
    inputValue,
    isLoading,
    isDisableButton,
    onCloseModalWindowHandler,
    onChangeInputValueHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    text,
  } = props;
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={MasterModalStyles}
    >
      <ModalWindowHeader headerTitle={headerText} />
      <Styled.MainContentWrapper>
        <Input
          onChangeValue={onChangeInputValueHandler}
          value={inputValue}
          text={text}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
       
      </Styled.MainContentWrapper>
      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        isSaveButton
        isDisableButton={isDisableButton}
      />
    </ReactModal>
  );
};
