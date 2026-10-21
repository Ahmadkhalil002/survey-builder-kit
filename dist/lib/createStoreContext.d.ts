import { StoreApi } from 'zustand';
export declare function createStoreContext<State>(storeName: string): {
    Context: import('react').Context<StoreApi<State> | null>;
    useBoundStore: <T>(selector: (state: State) => T) => T;
    useStoreApi: () => StoreApi<State>;
};
