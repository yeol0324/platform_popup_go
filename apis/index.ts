export interface APIResponse<T> {
  respTime: string;
  ok: boolean;
  errorState: null | any;
  result: T;
}
export * from './auth';
export * from './auth/type';
export * from './content';
export * from './content/type';
export * from './seed';
