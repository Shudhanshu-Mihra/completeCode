import React from 'react';
import { format } from 'date-fns';

import { getCorrectCustomId } from 'services/utils';

import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { StatusLabel } from 'components/StatusLabel/StatusLabel';

import { TableInboxAdminItemStyles as Styled } from './TableInboxAdminItem.style';
import { useTableInboxAdminItemState } from './TableInboxAdminItem.state';

interface TableInboxAdminProps {
  isVisited?: boolean;
  onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedPaidHandler?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  onCheckedApproveHandler?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  onCheckedPublishMockFuncHandler?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isChecked?: boolean;
  tax: string | null;
  date: string;
  supplier?: string | null;
  supplierAccount?: string | null;
  category?: string | null;
  vatCode: string | null;
  currency?: string | null;
  net: string | null;
  total: string | null;
  status: string;
  receiptId: string;
  selectedReceiptIndex: number;
  customId: string;
  paymentStatus?: boolean;
  approveStatus?: boolean;
  publishStatus?: boolean;
  dateFormat?: string;
  type: string;
  photos: string;
}

export const TableInboxAdminItem: React.FC<TableInboxAdminProps> = (props) => {
  const {
    isChecked,
    category,
    currency,
    date,
    net,
    status,
    supplier,
    supplierAccount,
    total,
    vatCode,
    tax,
    receiptId,
    selectedReceiptIndex,
    customId,
    paymentStatus,
    approveStatus,
    publishStatus,
    dateFormat,
    type,
    photos,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
    onCheckedItemHandler,
    onCheckedPublishMockFuncHandler,
  } = props;

  const { onReceiptDetailsClickHandler } = useTableInboxAdminItemState({
    receiptId,
    selectedReceiptIndex,
    photos,
    type,
  });
  return (
    <Styled.Item>
     
      <Styled.View id={receiptId} onClick={onReceiptDetailsClickHandler}>
      {/* <Styled.View id={receiptId} onClick={() => { console.log("clickk is working"); }}> */}
        <Styled.Link>{getCorrectCustomId(customId)}</Styled.Link>
      </Styled.View>
      <Styled.Selector>
        {!!date && dateFormat
          ? format(new Date(date), dateFormat)
          : '---'}
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{type && type=='receipt' ? 'receipt' : 'invoice' || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{supplier || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
     
      <Styled.Selector >
        <Styled.ValueWrapper >{vatCode || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{category || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      {/* <Styled.Selector>{currency || '---'}</Styled.Selector> */}
      <Styled.Selector>
        <Styled.ValueWrapper>{net || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{tax || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{total || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Status>
        <StatusLabel status={status as Statuses} />
      </Styled.Status>
    </Styled.Item>
  );
};
