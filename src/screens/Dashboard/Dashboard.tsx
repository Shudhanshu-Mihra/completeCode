import { FC, useEffect, useState } from 'react';
import { DashboardStyles as Styled } from './Dashboard.style';
import { useDashboardState } from './Dashboard.state';
import { ReUseDatePicker } from 'ReUseComponents/reUseDatePicker/ReuseDatePicker';
import { ReUseStatusFilter } from 'ReUseComponents/reUseStatusFilter/ReUseStatusFilter';
import { CustomSelect } from 'components/CustomSelect';
import { Icon } from 'components/Icons';
import { colors } from 'react-select/dist/declarations/src/theme';
import { theme } from 'styles/theme';

export const Dashboard: FC = () => {
  const {
    navigateToInvites,
    user,
    datePickerRef,
    dateFilterValue,
    isDatePickerOpen,
    datePickerValue,
    formattedDate,
    isInputDate,
    onChangeDate,
    setIsDatePickerOpen,
    onChangeDateFilterValueHandler,
    onClickOutsideDatePickerHandler,
    onChangeStatusValueHandler,
    statusValue,
    onChangeUserValueHandler,
    userValue,

  } = useDashboardState();

  const [selectedUser, setSelectedUser] = useState<string>('Users');
  const [selectedStatus, setSelectedStatus] = useState<string>('Status');
  // const { onChangeStatusValueHandler, statusValue } = useDashboardState();
  useEffect(() => {
    if (!user.active) {
      navigateToInvites();
      return;
    }
    // getReceiptsStatisticHandler();
  }, [user.active]);

  const userFilterOptions = [
    { value: 'all', label: `All` },
    { value: 'user-1', label: `User 1` },
    { value: 'user-2', label: `User 2` },
    { value: 'user-3', label: `User 3` },
    { value: 'user-4', label: `User 4` },
];

  return (
    <Styled.LayoutWrapper>
      
        <Styled.MainWrapper>
          <Styled.TopSection>
            <Styled.Dropdown>
            <CustomSelect onChangeValueHandler={onChangeUserValueHandler} options={userFilterOptions} value={userValue} paginate />
            </Styled.Dropdown>
            <Styled.Dropdown>
            <ReUseStatusFilter onChangeStatusValueHandler={onChangeStatusValueHandler} statusValue={statusValue} />
            </Styled.Dropdown>
            <Styled.DateDropdown>
              <ReUseDatePicker
                datePickerRef={datePickerRef}
                dateFilterValue={dateFilterValue}
                isDatePickerOpen={isDatePickerOpen}
                dateValue={datePickerValue}
                formattedDate={formattedDate}
                isInputDate={isInputDate}
                onChangeDate={onChangeDate}
                setIsDatePickerOpen={setIsDatePickerOpen}
                onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
                onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
              />
            </Styled.DateDropdown>
          </Styled.TopSection>

          <Styled.PurchasesContainer>
            <Styled.PurchasesTitle>Purchases</Styled.PurchasesTitle>
            <Styled.PurchasesMetrics>
              <Styled.Metric>
              <Styled.IconWithText statusColor="green">
                <Icon type='Inflow' width={30}/>
                <h3>Inflow</h3>
              </Styled.IconWithText>
              <Styled.DataNumber>
                {1000}
                </Styled.DataNumber>
              </Styled.Metric>
              <Styled.Metric>
              <Styled.IconWithText statusColor="red">
              <Icon type='Outflow' width={30} />
                <h3>Outflow</h3>
              </Styled.IconWithText>
              <Styled.DataNumber>{300}</Styled.DataNumber>
                
              </Styled.Metric>
            </Styled.PurchasesMetrics>
          </Styled.PurchasesContainer>
          <Styled.SalesWrapper>
          <Styled.PurchasesContainer>
            <Styled.PurchasesTitle>Sales</Styled.PurchasesTitle>
            <Styled.PurchasesMetrics>
            <Styled.Metric>
              <Styled.IconWithText statusColor="green">
              <Icon type='Inflow' width={30}/>
                <h3>Inflow</h3>
              </Styled.IconWithText>
              <Styled.DataNumber>
                {1000}
                </Styled.DataNumber>
              </Styled.Metric>
              <Styled.Metric>
              <Styled.IconWithText statusColor="red">
              <Icon type='Outflow' width={30}/>
                <h3>Outflow</h3>
              </Styled.IconWithText>
              <Styled.DataNumber>{300}</Styled.DataNumber>
              </Styled.Metric>
            </Styled.PurchasesMetrics>
          </Styled.PurchasesContainer>
            {/* Sales Summary Components */}
          </Styled.SalesWrapper>
        </Styled.MainWrapper>
      {/* </Styled.Wrapper> */}
    </Styled.LayoutWrapper>
  );
};
