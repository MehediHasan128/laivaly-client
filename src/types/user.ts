export interface TUserName {
  firstName: string;
  lastName: string;
}

export interface TUser {
  userId: string;
  id: string;
  userName: TUserName;
  userEmail: string;
  userProfileURL: string;
  role: string;
  status: string;
}
