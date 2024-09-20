import { styled } from 'styles/theme';

import { TABLE_GRID_MARKUP } from './TableInboxAdmin.constants';

export const TableInboxAdminStyles = {
  // border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
  
  Head: styled.div`
    display: grid;
    grid-template-columns: ${TABLE_GRID_MARKUP};
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
    padding-left: 19px;
    padding-right: 9px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
  `,
  // Text: styled.div`
  //   display: flex;
  //   align-items: center;
  //   text-aligns:left;
  //   color: ${(props) => props.theme.colors.lightBlack};
  //   font-weight: ${(props) => props.theme.fontWeight.semiBold};
  //   font-size: ${(props) => props.theme.size.default};
  //   padding-left: 9px;
  // `,
  Text: styled.div<{ textAlignRight?: boolean }>`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    padding-left: 9px;
    // text-align: ${(props) => props.textAlignRight ? 'left' : 'right'};
      text-align:right;
  `,
  Selector: styled.div<{ isSorted?: boolean , textAlignRight?: boolean }>`
    :hover {
      cursor: pointer;
    }
    padding-left: 10px;
    background-color: ${({ isSorted, theme }) =>
    isSorted && `${theme.colors.checkboxBackground}`};
    width:max-content;
    // text-align: ${({ textAlignRight }) => (textAlignRight ? 'left' : 'right')}; /* Optional alignment */
text-align:right;
  `,
  EmptyContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightBlack};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 50px;
    width: 100%;
  `,
};
