export interface IUser {
  email: string;
  password: string;
}

export interface dataUser extends IUser {
  displayName: string;
}