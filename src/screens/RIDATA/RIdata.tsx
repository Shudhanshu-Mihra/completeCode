import React, { useEffect } from 'react';
import { useRIdataState } from './RIdata.state';
import { IReceiptInvoiceData } from './types/RIdata.type'; // Import the correct type
import { ReUseStatusFilter } from 'ReUseComponents/reUseStatusFilter/ReUseStatusFilter';
import { ReUseActionMenu } from 'ReUseComponents/reUseActionMenu/ReUseActionMenu';
import { ReUseDatePicker } from 'ReUseComponents/reUseDatePicker/ReuseDatePicker';
import { ReUseSearch } from 'ReUseComponents/reUseSearch/ReUseSearch';
import { RIdata as Styled } from './RIdata.style';
import { TableInboxAdmin } from 'components/TableInboxAdmin';

export const RIdata = () => {
  const {
    receiptInvoiceData,
    onFetchReceiptsHandler,
    isContentLoading,
    onChangeSearchValueHandler,
    searchValue,
    onBlurHandler,
    onFocusSearchHandler,
    onChangeStatusValueHandler,
    statusValue,
    company,
    RIdataParams,
    sortField,
    sortOrder,
    requestSort
  } = useRIdataState();

  useEffect(() => {
    const params = {
      take: 100,
    };
    // onFetchReceiptsHandler(RIdataParams);
    onFetchReceiptsHandler(params);
  }, [onFetchReceiptsHandler]);

  if (isContentLoading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  // Derive isEmptyData based on recieptInvoiceData
  const derivedIsEmptyData = receiptInvoiceData.length === 0;

  if (derivedIsEmptyData) {
    return <p>No data available.</p>; // Display a message if no data is found
  }
  console.log("searchValue " , searchValue);
  return (
    <>
      {/* adding the header part  */}
				<Styled.ActionPanelPlaceHolder>
					<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
					{/* <ReUseDatePicker
						datePickerRef={datePickerRef}
						dateFilterValue={dateFilterValue}
						isDatePickerOpen={isDatePickerOpen}
						dateValue={dateValue}
						formattedDate={formattedDate}
						isInputDate={isInputDate}
						onChangeDate={onChangeDate}
						setIsDatePickerOpen={setIsDatePickerOpen}
						onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
						onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
					/> */}
					<ReUseStatusFilter onChangeStatusValueHandler={onChangeStatusValueHandler} statusValue={statusValue} />
					{/* <ReUseActionMenu margin="0 0 0 auto" actionListArray={InBoxActionList} isActionMenuDisabled={isActionMenuButtonDisabled} /> */}
				</Styled.ActionPanelPlaceHolder>
      {/* table component  */}
      <Styled.TableWrapper>
				{/* {isFetchingReceipts && (
					<Styled.LoaderWrapper>
						<LoaderComponent theme="preview" />
					</Styled.LoaderWrapper>
				)} */}
				<TableInboxAdmin
					// onCheckedItemHandler={onCheckedItemHandler}
					// onCheckedAllItemsHandler={onCheckedAllItemsHandler}
					// onCheckedPaidHandler={onCheckedPaidHandler}
					// onCheckedApproveHandler={onCheckedApproveHandler}
					// onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
					receiptList={receiptInvoiceData}
				  // isAllChecked={isAllChecked}
					dateFormat={company.date_format}
					sortField={sortField}
					sortOrder={sortOrder}
					requestSort={requestSort}
					isContentLoading={isContentLoading}
					isFetchingReceipts
				/>
				{/* {sortedReceipts?.length ? (
					<PaginationPanel
						pages={pages}
						currentPage={currentPage}
						onChangeItemsPerPage={onChangeItemsPerPage}
						onChangePaginationInputValue={onChangePaginationInputValue}
						inputPaginationValue={inputPaginationValue}
						itemsPerPage={itemsPerPage}
						onChangePage={onChangePage}
						onEnterGoToClick={onEnterGoToClick}
						onGoToClick={onGoToClick}
						onForwardClick={onForwardClick}
						onBackwardClick={onBackwardClick}
						paginationCustomStyle={paginationCustomStyle}
					/>
				) : null} */}
      </Styled.TableWrapper>
      
      {/* <ul>
      {recieptInvoiceData.map((item) => (
        <div key={item.id}>
          <p>Custom ID: {item.custom_id}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
      </ul> */}
    </>
  );
};
