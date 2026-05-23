export interface TUserName {
  firstName: string;
  lastName: string;
}

export interface TUser {
  _id: string;
  userId: string;
  id: string;
  userName: TUserName;
  userEmail: string;
  userProfileURL: string;
  userRole: string;
  status: string;
}
