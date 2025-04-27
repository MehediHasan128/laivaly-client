/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
  status: number;
  data: {
    success: boolean;
    message: string;
    errorSource: {
      path: string;
      message: string;
    }[];
  };
};

export type TResponce = {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
};
