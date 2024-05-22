import { AccountErrorCode, AccountService } from "./account.service";

export class MockAccountService implements AccountService {
  private loggedIn = false;

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public async login(
    username: string,
    password: string,
  ): Promise<AccountErrorCode | void> {
    if (username !== "admin" || password !== "admin")
      return AccountErrorCode.AUTHENTICATION_FAILED;

    this.loggedIn = true;
  }

  public async logout(): Promise<void> {
    this.loggedIn = false;
  }
}
