export type User = {
  id: number;
  username: string;
  email: string;
  address: string;
};

export type CurrentUser = {
  id: string;
  address: string;
  username?: string;
  email?: string;
};
