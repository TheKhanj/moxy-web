export enum AccountErrorCode {
  UNKNOWN_ERROR = 1,
  AUTHENTICATION_FAILED,
}

export function accountCodeMessage(code: AccountErrorCode) {
  switch (code) {
    case AccountErrorCode.AUTHENTICATION_FAILED:
      return "Authentication failed";
    case AccountErrorCode.UNKNOWN_ERROR:
    default:
      return "Unknown error occured";
  }
}

export interface AccountService {
  isLoggedIn(): boolean;
  login(username: string, password: string): Promise<AccountErrorCode | void>;
  logout(): Promise<AccountErrorCode | void>;
}
