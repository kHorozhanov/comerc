import { Store } from '@ngxs/store';

export function transferStoreState(store: Store, doc: Document) {
  return () => {
    const state = store.snapshot();
    const script = doc.createElement('script');
    script.innerHTML = `window.SAVED_STORE=${JSON.stringify(state)}`;
    doc.head.appendChild(script);
  };
}
