import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const LinkSocaAccModalWindowStyles = {
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 28px 33px 28px 33px;
    width: 100%;
    flex: 1;
    color:#404A5F;
  `,
   CloseIconWrapper: styled.div`
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  `,
};

export const PasswordChangeModel = {
  content: {
    ...modalContentStyles,
    width: '420px',
    height: 'max-content',
    
  },
  overlay,
};
