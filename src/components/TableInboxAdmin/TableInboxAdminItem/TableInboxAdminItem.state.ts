import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { selectReceipt , selectRecieptType,selectRecieptPhoto} from 'screens/RIDATA/reducer/RIdata.reducer';

import { ROUTES } from 'constants/routes';

interface IuseTableInboxAdminItemState {
  receiptId: string;
  selectedReceiptIndex: number;
  type: string;
  photos: string;
}

export const useTableInboxAdminItemState = (
  props: IuseTableInboxAdminItemState
) => {
  const { selectedReceiptIndex , type ,photos} = props;
  // console.log("receiptIndex  :-- ",receiptIndex);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: IState) => state.user);

  const onReceiptDetailsClickHandler = (
    event:React.MouseEvent<HTMLDivElement>
  ) => {
    dispatch(selectReceipt(selectedReceiptIndex));
    dispatch(selectRecieptType(type));
    dispatch(selectRecieptPhoto([photos]));
    navigate(ROUTES.ridetails);
  };
  return { ...user.userInfo, onReceiptDetailsClickHandler };
};
