import React, { useCallback, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionMeta } from 'react-select';
import { useToggle } from 'hooks/useToggle';
import { getUserCompanies } from 'components/Header/header.api';
import { format } from 'date-fns';
import { IState } from 'services/redux/reducer';
import {
  getLastMonthDateRange,
  getPrevWeekDateRange,
  getTodayDateRange,
  getYesterdayDateRange,
} from 'services/utils';
import { useGetCompanyLogo } from 'hooks/useGetCompanyLogo';
import { useSelectFiles } from 'hooks/useSelectFiles';

import { updateUserData } from '../SignUp/reducer/signup.reducer';
import { setCompanySwitcher } from '../Settings/reducer/settings.reducer';

import { getReceiptStatistic } from './dashboard.api';
import { DASHBOARD_INITIAL_STATE, getTimeFilterOptions } from './dashboard.constants';
import { setAndFormatDateToISO } from 'services/utils';
import { setStatistic } from './reducer/dashboard.reducer';
import { ITimeFIlterValue, IUserInfoData } from './types';
import { ROUTES } from '../../constants/routes';
// import { updateInvoiceItem, postEmail, getInvoices, invoiceDeleteAPI, markAsInvoicePaid, markAsInvoiceUnpaid, markAsInvoiceApproved, markAsInvoiceRejected, markAsInvoicePublished, markAsInvoiceUnpublished, markAsInvoiceWithdrawlApproval, markAsInvoiceWithdrawlRejection } from '../../screens/SalesInvoices/sales.api';

// import { setInvoicesList, setIsCompanyChanged, setIsFetchingData, setCheckedItem, setCheckedAllItems } from '../../screens/SalesInvoices/reducer/salesInvoices.reducer';
export interface IuseDashboardState {
  isFetchingDashboard: boolean;
  dateFilterValue: {
    value: string;
    label: string;
  };
  isContentLoading: boolean;
  datePickerValue: Date | null;
  datePickerRangeValue: Date[] | null;
  formattedDate: string;
  isInputDate: boolean;
  isLoading: boolean;
  statusValue: {
    value: string;
    label: string;
  };
  userValue:{
    value: string;
    label: string;
  };
}
export const useDashboardState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getCompanyLogo = useGetCompanyLogo();

  const {
    dashboard: { metric, receipts, companies },
    user: {
      // userInfo: { company },
      user,
      token,
    },
    settings: { companySwitcher },
  } = useSelector((state: IState) => state);
  const date_format = 'MMM-dd-yyyy';
  const [state, setState] = useState<IuseDashboardState>(DASHBOARD_INITIAL_STATE);
  const timeFilterOptions = getTimeFilterOptions();

  
  const onFetchDashboardHandler = () => {
    console.log("onFetchDashboardHandler is calling");
  }
  const totalReceiptCount =
    Number(metric?.accepted) +
    Number(metric?.rejected) +
    Number(metric?.processing) +
    Number(metric?.review);

  const [timeFilterValue, setTimeFilterValue] = useState<ITimeFIlterValue>(
    timeFilterOptions[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isContentLoading, setIsContentLoading] = useState(false);

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
  };

  const onChangeUserValueHandler = async (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      userValue: {
        value: newValue.value,
        label: `User - ${newValue.label}`,
      },
    }));
  };
  
  const onSelectFiles = useSelectFiles();

  const navigateToInvites = () => navigate(ROUTES.invites, { replace: true });

  const onSelectFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    onSelectFiles({
      files: event.target.files,
      location,
      route: 'inbox/files-upload-preview',
    });

  // const getReceiptsStatisticHandler = async (
  //   timeFrames?: { date_start: string; date_end: string },
  //   isTimeFilter?: boolean
  // ) => {
  //   try {
  //     if (isTimeFilter) {
  //       setIsContentLoading(true);
  //     } else {
  //       setIsLoading(true);
  //     }

  //     const payload = {
  //       date_start: timeFrames?.date_start || '',
  //       date_end: timeFrames?.date_end || '',
  //       active_account: user?.active || false,
  //     };
  //     const { data } = await getReceiptStatistic(payload);
  //     const companiesWithLogo = await getCompanyLogo(data.companies, token);
  //     dispatch(setStatistic({ ...data, companies: companiesWithLogo }));
  //     if (!user.accounts?.length && !user.active_account && !company.name) {
  //       const { account, company } = data.companies[0];
  //       setUserInfo({ active_account: account.id, account, company });
  //     }

  //     if (isTimeFilter) {
  //       setIsContentLoading(false);
  //     } else {
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     setIsContentLoading(false);
  //     setIsLoading(false);
  //     console.log(error);
  //   }
  // };
  const lastReceipts = receipts?.data.slice(0, 5);

  const dateHashMapping: Record<
    string,
    { date_start: string; date_end: string }
  > = {
    Today: getTodayDateRange(),
    Yesterday: getYesterdayDateRange(),
    'Last Week': getPrevWeekDateRange(),
    'Last Month': getLastMonthDateRange(),
  };

  const onChangeCategoryFieldHandler = (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    if (timeFilterValue.value === newValue.value) return;
    setTimeFilterValue(newValue);
    // getReceiptsStatisticHandler(dateHashMapping[newValue.value], true);
  };

  const setUserInfo = async (userData: IUserInfoData) => {
    try {
      if (!companySwitcher.length) {
        const { data } = await getUserCompanies();
        dispatch(setCompanySwitcher(data || []));
      }
      const { company, active_account, account } = userData;
      dispatch(updateUserData({ company, account, active_account }));
    } catch (err) {
      console.log(err);
    }
  };

  const datePickerRef = useRef<HTMLButtonElement>(null);

  const [isDatePickerOpen, setIsDatePickerOpen] = useToggle();

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsDatePickerOpen();
  };

  const onChangeDate = async (date: Date) => {
    if (Array.isArray(date)) {
      const isEqual = Array.isArray(state.datePickerRangeValue) ? state.datePickerRangeValue[0]?.toISOString() === date[0].toISOString() && state.datePickerRangeValue[1]?.toISOString() === date[1].toISOString() : null;
      setState((prevState) => (
        {
          ...prevState,
          dateRangeValue: isEqual ? null : date,
          formattedDate: isEqual ? '' : `${format(date[0], date_format)} - ${format(date[1], date_format)}`,
        }));
      setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date[0].toISOString());
      const dateEnd = setAndFormatDateToISO(date[1].toISOString(), true);
//##############################################
   // await onFetchSalesInvoicesHandler({
      //   ...fetchParams,
      //   date_start: isEqual ? '' : dateStart,
      //   date_end: isEqual ? '' : dateEnd,
      // });
    } else {
      const isEqual = state.datePickerValue?.toISOString() === date.toISOString();
      setState((prevState) => ({
        ...prevState,
        dateValue: isEqual ? null : date,
        formattedDate: isEqual ? '' : format(date, date_format),
      }));
      setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date.toISOString());
      const dateEnd = setAndFormatDateToISO(date.toISOString(), true);
      // await onFetchSalesInvoicesHandler({
      //   ...fetchParams,
      //   date_start: isEqual ? '' : dateStart,
      //   date_end: isEqual ? '' : dateEnd,
      // });
    }
  };
  const statusFilterOptions = [
    { value: 'all', label: `All` },
    { value: 'processing', label: `Processing` },
    { value: 'accepted', label: `Accepted` },
    { value: 'review', label: `Review` },
    { value: 'rejected', label: `Rejected` },
  ];
     
  const onChangeDateFilterValueHandler = async (
    newValue: any,
    actionMeta?: ActionMeta<unknown>
  ) => {
    if (newValue?.value !== 'range' && newValue?.value !== 'customdate') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        statusValue: {
          value: 'all',
          label: `Status - All`,
        },
        formattedDate: '',
        isInputDate: false
      }));
      await onFetchDashboardHandler(/* {
        ...fetchParams,
        skip: 0,
        status: '',
        date_filter: newValue.value === 'all' ? '' : newValue.value,
        date_start: '',
        date_end: ''
      } */);
    } else if (newValue.value === 'range') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        formattedDate: '',
        isInputDate: false
      }));
    } else if (newValue.value === 'customdate') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        formattedDate: '',
        isInputDate: false
      }));
    }
  };

  return {
    ...state,
    timeFilterValue,
    navigateToInvites,
    onSelectFilesHandler,
    // getReceiptsStatisticHandler,
    onChangeCategoryFieldHandler,
    isLoading,
    isContentLoading,
    companies,
    totalReceiptCount,
    timeFilterOptions,
    lastReceipts,
    receipts,
    // company,
    user,
    datePickerRef,
    isDatePickerOpen,
    // formattedDate,
    // isInputDate,
    onChangeDate,
    setIsDatePickerOpen,
    onChangeDateFilterValueHandler,
    onClickOutsideDatePickerHandler,
    statusFilterOptions,
    onChangeStatusValueHandler,
    onChangeUserValueHandler,
  };
};
