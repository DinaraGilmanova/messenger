// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ILocalStorage {
  setItem(key: string, value: string): void;
  getItem(key: string): string | null;
}
