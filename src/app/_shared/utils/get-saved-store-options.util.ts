import { StoreOptions } from '@ngxs/store/src/symbols';

export function getSavedStoreOptions<T>(name: string, defaults: T, children?: any[]): StoreOptions<T> {
  let options: StoreOptions<T> = {
    name,
    defaults,
    children
  };
  if (typeof window !== 'undefined') {
    options = {
      ...options,
      defaults: window['SAVED_STORE'] && window['SAVED_STORE'][name] || defaults
    };
  }
  return options;
}
