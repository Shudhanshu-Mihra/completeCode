// import { FC } from 'react';

// import { getFirstLetterUppercase } from 'services/utils';

// import { StatusBarStyles } from './StatusBar.style';
// import { Icon } from 'components/Icons';

// interface IStatusBarProps {
//   status?: string | undefined;
//   rid?: string | undefined;
// }
// export const StatusBar: FC<IStatusBarProps> = (props) => {
//   const { status, rid } = props;

//   const upperText = status && getFirstLetterUppercase(status);
//   return (
//     <StatusBarStyles.MainWrapper >
//       {/* {rid && (rid.toUpperCase())}  */}
//      <StatusBarStyles.Text>{upperText}</StatusBarStyles.Text>
//      <StatusBarStyles.Text>{rid}</StatusBarStyles.Text>
//      </StatusBarStyles.MainWrapper>
//   );
// };


import { FC } from 'react';

import { getFirstLetterUppercase } from 'services/utils';

import { StatusBarStyles } from './StatusBar.style';
import { Icon } from 'components/Icons';

interface IStatusBarProps {
  status?: TStatuses|string|undefined;
  rid?: string|undefined;
}
export const StatusBar: FC<IStatusBarProps> = (props) => {
  const { status, rid } = props;

  const upperText = status && getFirstLetterUppercase(status);

  return (
    <StatusBarStyles.MainWrapper status={status}>
      {rid && (rid.toUpperCase())}
      {status && (upperText == "Accepted" ? <Icon type="approvedMark" /> : upperText == "Review" ? <Icon type="review" /> : <Icon type="removeCross" />)} {<StatusBarStyles.Text>{upperText}</StatusBarStyles.Text>}
    </StatusBarStyles.MainWrapper>
  );
};