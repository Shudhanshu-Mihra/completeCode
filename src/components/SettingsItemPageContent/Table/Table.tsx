// import { TableSettingsMember } from '../../Table/TableInvites/';
// import { TableSettingsCompany } from '../../Table/TableInvites';

interface ITableProps {
  isMemeberList?: boolean;
  members?: IMember[];
  searchedCompanies?: ICompanySettings[];
  searchedUsers?: IMember[];
  companies?: ICompanySettings[];
  searchValue: string;
  userRole?: IAccount;
  onResendInvitationHandler?: (token: string) => void;
  onDeleteIconClickHandler: (itemId: string) => void;
  onEditIconClickHandler: (itemId: string) => void;
}
export const Table = (props: ITableProps) => {
  const {
    isMemeberList,
    searchValue,
    userRole,
    members,
    searchedUsers,
    companies,
    searchedCompanies,
    onResendInvitationHandler,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
  } = props;
  return (
    <>
  
        {/* <TableSettingsMember
          onResendInvitationHandler={onResendInvitationHandler}
          searchValue={searchValue}
          searchedUsers={searchedUsers}
          members={members}
          userRole={userRole}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
        />
       */}
    </>
  );
};
