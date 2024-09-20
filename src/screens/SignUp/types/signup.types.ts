export interface ICreateUser {
  token?: string;
  email: string;
  password: string;
  fullName: string;
  country: string;
}
export interface IUser extends ICreateUser {
  socialAuth?: null;
  id: string;
  active_account: string | null;
  accounts: IAccount[] | null;
  profile_image: string;
}

export interface ICapiumSocialAccount {
  capiumEmail: string;
  capiumId: string;
  id: string;
}
export interface IGoogleSocialAccount {
  googleEmail: string;
  googleId: string;
  id: string;
}

export interface ISocialAccounts {
  capium: ICapiumSocialAccount;
  google: IGoogleSocialAccount;
  isLinkedSocAcc: boolean;
}

export interface ICurrency {
  // country: string;
  // description: string;
  // id: string;
  // value: string;
  // symbol?:string;

  country: string;
  description: string;
  id: string;
  value: string;
  symbol?:string;
}

export interface IUserInfo {
  company: ICompany;
}

export interface ISIGN_UP_USER_INITIAL_STATE {
  user: IUser;
  token: string;
  refreshToken: string;
  socialAccount: ISocialAccounts;
  userInfo: IUserInfo;
  currencies: ICurrency[];
  isSkipOnboarding: boolean;
}

export interface IUpdateUserProfile {
  company: Pick<ICompany, 'currency' | 'date_format'>;
  user: Pick<IUser, 'email' | 'country' | 'fullName'>;
}

export interface ISwitchAccount {
  user: Omit<IUser, 'socialAuth'>;
  company: Omit<ICompany, 'currency'>;
}


export interface ISIGN_UP_SUPPORT_USER_INITIAL_STATE {
  user: ISupport_User;
  token: string;
  refreshToken: string;

  // socialAccount: ISocialAccounts;
  userInfo: IUserInfo;
  currencies:ICurrency[];
  // isSkipOnboarding: boolean;
}

export interface ISupport_User {
  // socialAuth?: null;
  id: string;
  active: boolean;
  email: string;
  profile_image: string;
  name:string;
  role:string;
  password:string;
  currencies: ICurrency[];
  date_format : string;

}
