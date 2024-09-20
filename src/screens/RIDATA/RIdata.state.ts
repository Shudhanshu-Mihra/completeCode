import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReceipts } from './RIdata.api';
import { ActionMeta, SingleValue } from 'react-select';
import { IGetReceiptsInvoiceParams, IuseInboxState } from './types/RIdata.type';
import { INITIAL_STATE } from './RIdata.constant';
import { IState } from 'services/redux/reducer';
import { setreceiptInvoiceData } from './reducer/RIdata.reducer';
import { useDebounce } from 'hooks/useDebounce';
import { usePagination } from 'hooks/usePagination';
import { setAndFormatDateToISO } from 'services/utils';
import { format } from 'date-fns';
import { useSortableData } from 'hooks/useSortTableData';

export const useRIdataState = () => {
  const [state, setState] = useState<IuseInboxState>(INITIAL_STATE);
  // const [state, setState] = useState<I>(INITIAL_STATE);
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(state.searchValue, 250);

  // const receiptInvoiceData = useSelector(
  //   (state: IState) => state.RIdata.receiptInvoiceData
  // );
  const { 
    user: {
      userInfo: { company },
      token,
    },
    RIdata: { receiptInvoiceData }
  }  = useSelector((state: IState) => state);
    const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);
    
  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onFetchReceiptsHandler = useCallback(async (params?: IGetReceiptsInvoiceParams) => {
    try {
      setState(prevState => ({
        ...prevState,
        isContentLoading: true,
        checkedIds: [],
        receiptInvoiceData: [],
      }));

      const { data } = await getReceipts(params || {});
      console.log('Fetched data:', data);

      // Assuming the API response has the data array
        dispatch(setreceiptInvoiceData(data.data));
        
      setState(prevState => ({
        ...prevState,
        receiptInvoiceData: data.data || [],
        isEmptyData: data?.length === 0,
        isFetchingReceipts: false,
          isContentLoading: false,
      }));
        for (let i = 0; i < receiptInvoiceData.length;i++){
            
            // console.log(state.receiptInvoiceData[i]);
        }
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        isFetchingReceipts: false,
        isEmptyData: false,
        isContentLoading: false,
        checkedIds: [],
      }));
      console.error('Failed to fetch receipts:', error);
    }
  }, [dispatch]);

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
    }));
  };
  
  const onChangePage = async ({ selected }: { selected: number }) => {
    await onFetchReceiptsHandler({
      ...RIdataParams,
      skip: selected * +itemsPerPage.value, 
    });
    onChangePageHandler(selected);
  };

    //pagination function's
    const {
      onBackwardClick,
      onForwardClick,
      onGoToClick,
      onEnterGoToClick,
      onChangePaginationInputValue,
      onChangePagesAmount,
      onChangePageHandler,
      setItemsPerPage,
      setCurrentPage,   // used in state.ts only, don't need to export 
      itemsPerPage, 
      currentPage,
      pages,
      inputPaginationValue,
    } = usePagination({
      onChangePage,
    });
  
    const onChangeStateFieldHandler = (
        optionName: keyof typeof INITIAL_STATE,
        value: string | number | boolean | SingleValue<IOption>
      ) => {
        setState((prevState) => ({
          ...prevState,
          [optionName]: value,
        }));
  };

  const dateStart =
  state.dateValue && setAndFormatDateToISO(state.dateValue.toISOString());
const dateEnd =
  state.dateValue &&
  setAndFormatDateToISO(state?.dateValue.toISOString(), true);

  //predefine data set 
    const RIdataParams = {
        search: debouncedValue,
        status: state.statusValue.value === 'all' ? '' : state.statusValue.value,
        date_filter: state.dateFilterValue.value === 'all' ? '' : state.dateFilterValue.value,
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
        date_start: dateStart || '',
        date_end: dateEnd || '',
        // active_account: active_account || '',
    }
    
  const onChangeStatusValueHandler = async (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      statusValue: {
        value: newValue.value,
        label: `Status - ${newValue.label}`,
      },
    }));
    await onFetchReceiptsHandler({
      ...RIdataParams,
      skip: 0,
      status: newValue.value === 'all' ? '' : newValue.value,
    });
    setCurrentPage(0);
  };
    
  const onChangeDate = async (date: Date) => {
    if (Array.isArray(date)) {
      const isEqual = Array.isArray(state.dateRangeValue) ? state.dateRangeValue[0]?.toISOString() === date[0].toISOString() && state.dateRangeValue[1]?.toISOString() === date[1].toISOString() : null;
      setState((prevState) => (
        {
          ...prevState,
          dateRangeValue: isEqual ? null : date,
          formattedDate: isEqual ? '' : `${format(date[0], company.date_format)} - ${format(date[1], company.date_format)}`,
        }));
      // setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date[0].toISOString());
      const dateEnd = setAndFormatDateToISO(date[1].toISOString(), true);

      // await onFetchReceiptsHandler({
      //   ...RIdataParams,
      //   date_start: isEqual ? '' : dateStart,
      //   date_end: isEqual ? '' : dateEnd,
      // });
    } else {
      console.log(date);
      const isEqual = state.dateValue?.toISOString() === date.toISOString();
      setState((prevState) => ({
        ...prevState,
        dateValue: isEqual ? null : date,
        formattedDate: isEqual ? '' : format(date, company.date_format),
      }));
      // setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date.toISOString());
      const dateEnd = setAndFormatDateToISO(date.toISOString(), true);

      // await onFetchReceiptsHandler({
      //   ...RIdataParams,
      //   date_start: isEqual ? '' : dateStart,
      //   date_end: isEqual ? '' : dateEnd,
      // });
    }
  };

  const {
    items: sortedReceipts,
    requestSort,
    sortField,
    sortOrder,
  } = useSortableData({
    items: receiptInvoiceData,
  });
  return {
    ...state,
    onFetchReceiptsHandler,
      receiptInvoiceData,
      onChangeSearchValueHandler,
      onBlurHandler,
    onFocusSearchHandler,
    onChangeStatusValueHandler,
    RIdataParams,
    company,
    sortField,
    sortOrder,
    requestSort
  };
};
