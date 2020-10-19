export interface IDecodedPayload {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface ISagaActionMeta {
  redirect: (path: string) => void;
  path: string;
}