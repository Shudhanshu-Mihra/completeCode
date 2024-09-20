import { FC } from 'react';

// import { HeaderPanelMaster } from '../HeaderPanelMaster';
// import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { LoaderComponent } from '../Loader';
import { PaginationPanel } from '../PaginationPanel';
import { SettingsItemPageContentStyle as Styled } from './SettingsItemPageContent.style';
import { Table } from './Table';
import { ISettingsItemPageContentProps } from './types/settingsItemPageContent.types';
import { ReUseActionPlaceholder } from 'ReUseComponents/reUseActionPlaceHolder/ReUseActionPlaceHolder';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';
import { ReUseSearch } from 'ReUseComponents/reUseSearch/ReUseSearch';

export const SettingsItemPageContent: FC<ISettingsItemPageContentProps> = (
  props
) => {
  const {
    currentPage,
    inputPaginationValue,
    searchedCompanies,
    onAddClickButtonHandler,
    onBackwardClick,
    onChangePaginationInputValue,
    onChangeItemsPerPage,
    onChangeSearchValueHandler,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onEnterGoToClick,
    onForwardClick,
    onGoToClick,
    onBlurHandler,
    onFocusSearchHandler,
    onChangePage,
    onResendInvitationHandler,
    searchedUsers,
    pages,
    itemsPerPage,
    searchValue,
    isGuard,
    userRole,
    members,
    isMemeberList,
    // isContentLoading,
    isFetchingData,
    companies,
  } = props;
  const isContentLoading = false;

  const isPaginationPanel = isMemeberList
    ? (searchValue && searchedUsers?.length) ||
      (!searchValue && members?.length)
    : (searchValue && searchedCompanies?.length) ||
      (!searchValue && companies?.length);

  return (
    <Styled.ContentWrapper>
      <ReUseActionPlaceholder>
      <ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />

      <ReUseActionButton displayText="Create User" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onAddClickButtonHandler} displayIconType="addPlus" margin="0 0 0 auto" />
      </ReUseActionPlaceholder>
      {isContentLoading ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingData && !isContentLoading ? (
        <div>
          <Table
            onResendInvitationHandler={onResendInvitationHandler}
            searchedCompanies={searchedCompanies}
            isMemeberList={isMemeberList}
            searchValue={searchValue}
            searchedUsers={searchedUsers}
            members={members}
            userRole={userRole}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            companies={companies}
          />
          {isPaginationPanel ? (
            <Styled.paginationPosition>
            <PaginationPanel
              pages={pages}
              currentPage={currentPage}
              onChangePage={onChangePage}
              onChangePaginationInputValue={onChangePaginationInputValue}
              onForwardClick={onForwardClick}
              onBackwardClick={onBackwardClick}
              onEnterGoToClick={onEnterGoToClick}
              onChangeItemsPerPage={onChangeItemsPerPage}
              itemsPerPage={itemsPerPage}
              inputPaginationValue={inputPaginationValue}
              onGoToClick={onGoToClick}
            />
            </Styled.paginationPosition>
          ) : null}
        </div>
      ) : null}
    </Styled.ContentWrapper>
  );
};
