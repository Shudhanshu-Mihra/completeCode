import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const LinkSocaAccModalWindowStyles = {
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 33px 28px 33px;
    width: 100%;
    flex: 1;
  `,
};

export const LinkSocAccModalStyles = {
  content: {
    ...modalContentStyles,
    width: '420px',
    height: '502px',
  },
  overlay,
};
