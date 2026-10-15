export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';
export interface SnackbarState {
    message: string | null;
    severity: SnackbarSeverity;
    showError: (message: string) => void;
    showWarning: (message: string) => void;
    showInfo: (message: string) => void;
    clear: () => void;
}
export declare function createSnackbarStore(): import('zustand').StoreApi<SnackbarState>;
export type SnackbarStoreApi = ReturnType<typeof createSnackbarStore>;
declare const SnackbarStoreContext: import('react').Context<import('zustand').StoreApi<SnackbarState> | null>, useSnackbarStore: <T>(selector: (state: SnackbarState) => T) => T, useSnackbarStoreApi: () => import('zustand').StoreApi<SnackbarState>;
export { SnackbarStoreContext, useSnackbarStore, useSnackbarStoreApi };
