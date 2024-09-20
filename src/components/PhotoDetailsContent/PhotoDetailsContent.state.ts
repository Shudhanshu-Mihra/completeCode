// import { ROUTES } from 'constants/routes';
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { ActionMeta, SingleValue } from 'react-select';
// import { useNavigate } from 'react-router-dom';
// import { updateReceiptItem } from 'screens/RecieptInvoiceDataList/RecieptInvoiceDataList.api';
// import { format } from 'date-fns';

// import { IState } from 'services/redux/reducer';
// // import {
// //   getFormatedCurrencies,
// //   getReceiptDetailsCurrentSelectItem,
// // } from 'services/utils';

// // // import {
// // //   getAllMasterItems,
// // //   updateReceiptItem,
// // // } from 'screens/ReceiptDetails/receiptDetails.api';
// // // import {
// // //   setIsFetchingDate,
// // //   updateReceipt,
// // // } from 'screens/Inbox/reducer/inbox.reducer';
// // // import { setItemsForSelect } from 'screens/ReceiptDetails/reducer/receiptDetails.reducer';

// // import {
// //   getInputFields,
// //   photoDetailsContentInitialState,
// // } from './photoDetailsContent.constants';

// // import { ROUTES } from 'constants/routes';
// import { DATE_FORMATS } from 'constants/strings';
// import { date } from 'yup';


// export const usePhotoDetailsContentState = () => {

//   const navigate = useNavigate();

//   const {

//     RIdata: { selectedReceipt }
//   } = useSelector((state: IState) => state);


// useEffect(() => {
//   if (selectedReceipt) {
//     setState((prevState) => ({
//       ...prevState,
//       dateValue: selectedReceipt?.created || null,
//     }));
//   }
// }, [selectedReceipt?.id]);

//   const [state, setState] = useState({
//     currencyValue: selectedReceipt?.type_currency || '',
//     dateValue: selectedReceipt?.created || null,
//     formattedDate: selectedReceipt?.created
//     ? format(new Date(selectedReceipt.created), DATE_FORMATS[0].value)
//     : '',  // Provide    RIdata: []
//   });//
//   const [ButtonValue, setButtonValue] = useState('');

//   const [isLoading, setIsLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const onCancelButtonClickHandler = () => navigate(-1);


//   const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setButtonValue(event.currentTarget.value);
//   };


// useEffect(() => {
//   if (selectedReceipt) {
//     setState(prevState => ({
//       ...prevState,
//       dateValue: selectedReceipt.created || null,
//       formattedDate: selectedReceipt.created
//         ? format(new Date(selectedReceipt.created), DATE_FORMATS[0].value)
//         : ''
//     }));
//   }
// }, [selectedReceipt?.id]);
  
  
// const onChangeDate = (date: Date) => {
//   setIsOpen(!isOpen);
//   setState(prevState => ({
//     ...prevState,
//     dateValue: date,
//     formattedDate: format(date, DATE_FORMATS[0].value)
//   }));
//   };
  
// // const onCancelButtonClickHandler = () => navigate(-1);

// // const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
// //   setButtonValue(event.currentTarget.value);
// // };

// const saveReceiptHandler = async () => {
//   try {
//     const payload = {
//       id: selectedReceipt?.id || '',
//       currency: selectedReceipt?.type_currency || '',
//       vat_code: selectedReceipt?.vat_code || ''
//     };

//     setIsLoading(true);
//     const { data } = await updateReceiptItem(payload);
//     setIsLoading(false);
//     navigate(ROUTES.pendingriData);
//   } catch (error) {
//     console.log(error);
//     setIsLoading(false);
//   }
// };

// return {
//   ...state,  // Make sure to return formattedDate
//   isLoading,
//   isOpen,
//   onChangeDate,
//   onCancelButtonClickHandler,
//   onChangeRadioButtonHandler,
//   saveReceiptHandler
// };
// };


// import { ROUTES } from 'constants/routes';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { updateReceiptItem } from 'screens/RecieptInvoiceDataList/RecieptInvoiceDataList.api';
// import { format } from 'date-fns';
// import { IState } from 'services/redux/reducer';
// import { DATE_FORMATS } from 'constants/strings';

// export const usePhotoDetailsContentState = () => {
//   const navigate = useNavigate();
//   const { RIdata: { selectedReceipt } } = useSelector((state: IState) => state);

//   const [state, setState] = useState({
//     currencyValue: selectedReceipt?.type_currency || '',
//     dateValue: selectedReceipt?.created || null,
//     formattedDate: selectedReceipt?.created
//       ? format(new Date(selectedReceipt.created), DATE_FORMATS[0].value)
//       : ''
//   });

//   const [buttonValue, setButtonValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (selectedReceipt) {
//       setState({
//         currencyValue: selectedReceipt.type_currency || '',
//         dateValue: selectedReceipt.created || null,
//         formattedDate: selectedReceipt.created
//           ? format(new Date(selectedReceipt.created), DATE_FORMATS[0].value)
//           : ''
//       });
//     }
//   }, [selectedReceipt?.id]);

//   const onCancelButtonClickHandler = () => navigate(-1);

//   const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setButtonValue(event.currentTarget.value);
//   };

//   const onChangeDate = (date: Date) => {
//     setIsOpen(!isOpen);
//     setState(prevState => ({
//       ...prevState,
//       dateValue: date,
//       formattedDate: format(date, DATE_FORMATS[0].value)
//     }));
//   };

//   const saveReceiptHandler = async () => {
//     try {
//       const payload = {
//         id: selectedReceipt?.id || '',
//         currency: state.currencyValue,
//         vat_code: selectedReceipt?.vat_code || ''
//       };

//       setIsLoading(true);
//       await updateReceiptItem(payload);
//       navigate(ROUTES.pendingriData);
//     } catch (error) {
//       console.error('Error updating receipt:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     ...state,
//     isLoading,
//     isOpen,
//     onChangeDate,
//     onCancelButtonClickHandler,
//     onChangeRadioButtonHandler,
//     saveReceiptHandler
//   };
// };


import { ROUTES } from 'constants/routes';
import React, { useEffect, useState ,useRef, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateReceiptItem } from 'screens/RecieptInvoiceDataList/RecieptInvoiceDataList.api';
import { format } from 'date-fns';
import { IState } from 'services/redux/reducer';
import { DATE_FORMATS } from 'constants/strings';
import { date } from 'yup';
import { currencies } from 'screens/SignUp/SignUp.constants';
import { SingleValue } from 'react-select';
import { ICurrency } from "../../screens/SignUp/types/signup.types";
export const usePhotoDetailsContentState = () => {
  const navigate = useNavigate();
  const {user:{currencies}, RIdata: { selectedReceipt } } = useSelector((state: IState) => state);

  // Update state type to reflect Date values
  const [state, setState] = useState({
    currencyValue: selectedReceipt?.type_currency || '',
    type_date: selectedReceipt?.created ? new Date(selectedReceipt.created) : '',
    formattedDate: selectedReceipt?.created 
      ? format(new Date(selectedReceipt.created), DATE_FORMATS[0].value)
      : '',
    status: selectedReceipt?.status || '',
    vat: selectedReceipt?.vat_code || '',
    total: selectedReceipt?.total || '',
    tax: selectedReceipt?.tax || '',
    net:selectedReceipt?.net || '',
    supplier: selectedReceipt?.type_user || '',
    recieptId: selectedReceipt?.custom_id || '',

  });

  const [buttonValue, setButtonValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedReceipt) {
      setState({
        currencyValue: selectedReceipt.type_currency || '',
        type_date: selectedReceipt.created ? new Date(selectedReceipt.created) : '',
        formattedDate: selectedReceipt.created 
          ? format(new Date(selectedReceipt.created), DATE_FORMATS[0].value)
          : '',
        status: selectedReceipt.status || '',
        vat: selectedReceipt.vat_code || '',
        total: selectedReceipt.total || '',
        tax: selectedReceipt.tax || '',
        net:selectedReceipt.net || '',
        supplier:selectedReceipt.type_user || '',
        recieptId: selectedReceipt.custom_id || '',

      });
    }
  }, [selectedReceipt?.id]);

  const onCancelButtonClickHandler = () => navigate(-1);

  const item = {
    value: 
      { value: selectedReceipt?.type_currency, label:selectedReceipt?.type_currency, id: '1' } as SingleValue<IOption>, // Multiple selections
    options:{
    
    },
      // onChangeSelect: onChangeCurrencyFieldHandler,
  
    isDisabled: false
  };

  interface ICurrenciesData{
    value: string,
    label: string,
    [key: string]: string | undefined;
    id?: string
  }
  const currenciesData: ICurrenciesData[] = currencies.map((currency: ICurrency) => ({
    value: currency.value,
    label: `${currency.country} - ${currency.value}`,
    key: currency.id,
  }));
  const onDatePickerClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    datePickerRef.current &&
      datePickerRef?.current.contains(e.target as Node) &&
      setIsOpen(!isOpen);
    console.log("datePickerRef.current :- ",datePickerRef.current);
  };

  const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setButtonValue(event.currentTarget.value);
    console.log("buttonValue :--- ", buttonValue);
  };

  const onChangeDate = (date: Date) => {
    setIsOpen(!isOpen);
    setState(prevState => ({
      ...prevState,
      formattedDate: format(date, DATE_FORMATS[0].value),
      type_date:date
    }));
    console.log("Selected Date:", state.type_date); // Raw date object
  console.log("Formatted Date:", format(date, DATE_FORMATS[0].value)); // Formatted date
  };

  const onForbiddenCharacterClick = (event: React.KeyboardEvent) => {
    if (event.key === '-' || event.key === 'e' || event.key === '+') {
      event.preventDefault();
    }
  };

  const saveReceiptHandler = async () => {
    try {
      const payload = {
        id: selectedReceipt?.id || '',
        description: selectedReceipt?.description,
        status: 'review',
        receipt_date: state.type_date || selectedReceipt?.created,
        supplier: state.supplier || selectedReceipt?.type_user,
        supplier_account: null,
        category: null,
        vat_code: state.vat || selectedReceipt?.vat_code,
        net: state.net || selectedReceipt?.net,
        tax: state.tax || selectedReceipt?.tax,
        total:state.total || selectedReceipt?.total,
        // type:selectedReceipt?.type ,
        currency: state.currencyValue || selectedReceipt?.type_currency,
        publish_status:selectedReceipt?.publish_status,
        payment_status:selectedReceipt?.payment_status,
        active_account:null,
      };

      setIsLoading(true);
      await updateReceiptItem(payload);
      navigate(ROUTES.pendingriData);
    } catch (error) {
      console.error('Error updating receipt:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsOpen(false);
  };
  const datePickerRef = useRef<HTMLButtonElement>(null);

  const handleFieldChange = (fieldName: string, value: string) => {
    // console.log(fieldName + ': ' + value);
		setState((prevState) => ({
			...prevState,
			[fieldName]: value,
		}));
		
	};
  

  // const handleInputChange = (
  //   event:ChangeEvent<HTMLInputElement>,
  //   field: string
  // ) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     [field]: event.target.value,
	//   }));
	//   console.log("field :---",field , "event :---" , event);
  // };
  return {
    ...state,
    setState,
    state,
    isLoading,
    isOpen,
    onChangeDate,
    onCancelButtonClickHandler,
    onChangeRadioButtonHandler,
    saveReceiptHandler,
    onDatePickerClickHandler,
    datePickerRef,
    onClickOutsideDatePickerHandler,
    onForbiddenCharacterClick,
    handleFieldChange,    
    currenciesData
  };
};
