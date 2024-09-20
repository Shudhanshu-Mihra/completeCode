import { styled } from 'styles/theme';

export const FiedlsBoxStyles = {
  Container: styled.div`
   width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    gap:20px;
    margin-bottom: 35px
`,
  FieldItem: styled.div`
  width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    gap:20px;
`,
  InputWrapper: styled.div`
 width: 100%;
    position: relative;
    `
};
