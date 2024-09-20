import { styled } from 'styles/theme';

export const ModalButtonsBoxStyles = {
  ButtonsBox: styled.div<{ isNoPadding?: boolean; buttonPosition?: string; isCancelButton?: boolean; }>`
    display: flex;
    width: 100%;
    gap:20px;
    align-items:center;
    margin:30px 0px 20px 0px;
    justify-content: ${({ buttonPosition }) =>
      buttonPosition ? buttonPosition : 'center'};
    padding: ${({ isNoPadding }) => (isNoPadding ? '0' : '0 30px 0 30px')};
  `,
  ButtonsWrapper: styled.div<{
    isCancelButton?: boolean;
  }>`
    display: flex;
    gap: 10px;
    justify-content: ${({ isCancelButton }) =>
      isCancelButton ? 'flex-end' : 'space-between'};
    max-width: 175px;
    width: 100%;
  `,
  CloseIconWrapper: styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,
};
