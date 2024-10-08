import Axios from 'axios';

import { apiServices } from 'services/api-service';

import { CONFIG } from 'constants/config';

export const updateReceiptItem = (payload: IUpdateReceiptItemPayload) => {
  const URL = 'receipt/update';
  // const URL = `/admin/uploads/${payload.type}/${payload.id}/reviewed`;
  return apiServices.changeData(URL, payload);
  // return apiServices.updateData(URL, payload);
};

export const getReceiptImage = (
  imageName: string,
  token: string,
  active_account?: string
) => {
  const URL = `${CONFIG.apiUrl}receipt/images/${imageName}`;
  return Axios.get(URL, {
    params: { active_account },
    headers: {
      'Content-Type': 'image/jpeg',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};

type TDirection = 'category' | 'supplier' | 'payment-type' | 'expense-report';

export const getAllMasterItems = (
  urlDirection: TDirection,
  active_account?: string
) => {
  const URL = `${urlDirection}/get-all`;
  return apiServices.fetchData(URL, { active_account });
};
