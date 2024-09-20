import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRIDATA_INITIAL_STATE } from '../types/RIdata.type';

// Initial state with an empty array for receiptInvoiceData
export const RIDATA_INITIAL_STATE: IRIDATA_INITIAL_STATE = {
  receiptInvoiceData: [
    {
      id: "",
      custom_id: "",
      description: null,
      status: "",
      photos: "",
      created: "",
      updated: "",
      active_status: true,
      approved_status: true,
      payment_status: true,
      publish_status: true,
      vat_code: "",
      net: "",
      tax: "",
      total: "",
      type_date: null,
      type_user: null,
      type: "",
      type_currency:''
    },
  ],
  selectedReceipt: null,
  selectedReceiptIndex:null,
  selectedReceiptType:"",
  selectedReceiptPhoto:[]

};

const initialState = RIDATA_INITIAL_STATE;

export const RIdataSlice = createSlice({
    name: 'RIdataSlice',
    initialState,
    reducers: {
      setreceiptInvoiceData: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<IRIDATA_INITIAL_STATE['receiptInvoiceData']>
      ) => {
        state.receiptInvoiceData = action.payload;
      },
      selectReceipt: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<number>
      ) => {
        state.selectedReceiptIndex = action.payload;
        state.selectedReceipt = state.receiptInvoiceData.find((item, index) => index === action.payload) || null
      },
      selectRecieptType: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<string>
      ) => {
        if (state.selectedReceipt) {
          // Update the type of the selected receipt
          state.selectedReceipt.type = action.payload;
          state.selectedReceiptType = action.payload;
        }
      },
      selectRecieptPhoto: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<string[]>
      ) => {
        if (state.selectedReceipt) {
          
          state.selectedReceiptPhoto = action.payload;
        }
      },
    },
  });
  
  export const { setreceiptInvoiceData ,selectReceipt ,selectRecieptType ,selectRecieptPhoto } = RIdataSlice.actions;
  
  export const RIdataReducer = RIdataSlice.reducer;