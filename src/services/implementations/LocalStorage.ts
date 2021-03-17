import { ILocalStorage } from "@/services/ILocalStorage";

export class LocalStorage implements ILocalStorage {
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}
