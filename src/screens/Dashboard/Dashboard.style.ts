import { styled, theme } from 'styles/theme';

export const DashboardStyles = {
  LayoutWrapper: styled.div`
    display: grid;
    grid-template-rows: 1fr;
    background: ${({ theme }) => theme.colors.whiteGray};
  `,
  Wrapper: styled.div`
    width: 100%;
    height: max-content;
  `,
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 15%;
    background: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
  `,
  TopSection: styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap:20px;

`,
  Heading: styled.h2`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.63px;
    text-align: left;
    margin-bottom: 2%;
    margin-left: 2%;
  `,
  Container: styled.div`
    width: 100%;
  `,
  ListItem: styled.div`
    width: 100%;
    height: 80px;
    padding: 2%;
    background-color: #ffffff;
    margin-bottom: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  `,
  TextContent: styled.div`
    text-align: center;
  `,
  PurchaseSummaryWrapper: styled.div`
    width: 100%;
  `,
  UpdatesTimeLineWrapper: styled.div`
    width: 100%;
    margin-top: 2%;
  `,
  SalesWrapper: styled.div`
    width: 100%;
  `,
  CompanyListItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1% 0;
  `,
  PurchasesContainer: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  `,
  PurchasesTitle: styled.h3`
    font-size: 18px;
    padding:10px;
    color: #404A5F;
    width: 100%;
    border-bottom: 1px solid #E0E0E0;
  `,
  PurchasesMetrics: styled.div`
    display: flex;
    justify-content: space-around;
  `,
  Metric: styled.div`
    padding-top:20px;
    padding-bottom:20px;
    font-size: 14px;
    display: flex;
    color: #404A5F;
    flex-direction: column;
    align-items: center;
  `,
  MetricIcon: styled.div`
    margin-bottom: 0.8%;
  `,
  IconDash: styled.div`
  `,
  MetricValue: styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #333;
  `,
  DateDropdown: styled.div` 
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    flex: 0 0 auto;
    margin-left: auto; 
  `,
  MiddleIconsUpdates : styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: auto;
  `,
  CompanyName : styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.63px;
    text-align: left;
    color: #333;
    position: absolute;
    left: 15px;
    top: 15px;
  `,
  IconContainer : styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
  `,
  Date : styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;
    font-size: 12px;
  `,
  Price : styled.div`
    position: absolute;
    left: 15px;
    bottom: 10px;
    font-size: 12px;
  `,
  ListItemUpdate : styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    position: relative;
    height: 100px;
  `,
   Dropdown: styled.div`
   width:20%;
   margin-right: 5px; 
    
  }
  `,
  IconWithText: styled.div<{statusColor:keyof typeof theme.colors}>` 
  display: flex;
  align-items: center;

  .svg {
    fill: ${(props)=> props.theme.colors[props.statusColor]}
  }
  h3{
    font-size : 18px;
    color:${(props)=> props.theme.colors[props.statusColor]}
    }
  color: ${(props) => props.color === 'green' ? props.theme.colors.green : props.theme.colors.red};
  `,
  DataNumber: styled.div`
    font-size:18px;
    font-weight:500;
    padding-left:25px;
  `,

};
