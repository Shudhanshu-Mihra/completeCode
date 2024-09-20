// Interface representing the initial state for the receipt invoice data
export interface IRIDATA_INITIAL_STATE {
    receiptInvoiceData: IReceiptInvoiceData[];  // Array of receipt invoice data
    selectedReceipt: IReceiptInvoiceData | null ;
    selectedReceiptIndex: number | null;
    selectedReceiptType: string ;
    selectedReceiptPhoto: string[];
}
  
// Interface representing the structure of each receipt invoice data item
export interface IReceiptInvoiceData {
    id: string;
    custom_id: string;
    description: string | null;
    status: string;
    photos: string;
    created: string;
    updated: string;
    active_status: boolean;
    approved_status: boolean;
    payment_status: boolean;
    publish_status: boolean;
    vat_code: string;
    net: string;
    tax: string;
    total: string;
    type_date: string | null;
    type_user: string | null;
    type: string;
    type_currency: string;
}
  
// Interface representing a selectable item (e.g., for dropdowns or lists)
export interface ISelectItem {
    id: string;
    created: string;
    name: string;
}
  
// Interface representing the initial state of the inbox
export interface IINBOX_INITIAL_STATE {
    count: number | null;
    totalCount: number | null;
    receipts: IReciept[];
    selectedReciept: IReciept | null;
    selectedRecieptIndex: number | null;
    isFetchingData: boolean;
    isAllChecked: boolean;
    isCompanyChanged: boolean;
}
  
// Interface representing the parameters for fetching receipt invoices
export interface IGetReceiptsInvoiceParams {
    status?: string;
    take?: number;
    skip?: number;
}
// export interface IImageKey {
//     key: string | undefined;
// }
export interface IImageView {
    keys: string[];
   };
// Interface representing the structure of a POST email request
export interface IPostEmail {
    active_account: string;
    message?: string;
    receipts: string[];
    to: string;
    subject: string;
}
  
// Interface representing the state used in the Inbox component
export interface IuseInboxState {
    receiptInvoiceData: IReceiptInvoiceData[]; // Array of receipt invoice data
    isFetchingReceipts: boolean;
    statusValue: {
      value: string;
      label: string;
    };
    dateFilterValue: {
      value: string;
      label: string;
    };
    isContentLoading: boolean;
    searchValue: string;
    dateValue: Date | null;
    dateRangeValue: Date[] | null;
    formattedDate: string;
    isInputDate: boolean;
    showActions: boolean;
    checkedIds: string[];
    isLoading: boolean;
    csvData: string;
    receiptsToSend: string[];
    excelUrl: string;
}
