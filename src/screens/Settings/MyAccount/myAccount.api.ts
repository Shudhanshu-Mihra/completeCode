import { apiServices } from 'services/api-service';

interface IUpdateUserProfile {
  fullName?: string;
  email?: string;
  country?: string;
  currency?: string;
  date_format?: string;
  active_account?: string;
}

interface IChangePassword {
  password:string;
  newPassword: string;
}

export const getProfile = (
  active: boolean,
  user_id:string,
) => {
  const URL = `admin/my-profile`;
  return apiServices.fetchData(URL);
};

export const resetPassword = (payload: IChangePassword) => {
  const URL = `/auth/reset-password`;
  return apiServices.changeData(URL, payload);
};

export const updateProfile = (payload: IUpdateUserProfile) => {
  const URL = `profile/update`;
  return apiServices.changeData(URL, payload);
};

export const linkSocialAccount = (payload: {
  email: string;
  country: string;
  newPassword: string;
}) => {
  const URL = 'auth/bind-social-account';
  return apiServices.postData(URL, payload);
};
