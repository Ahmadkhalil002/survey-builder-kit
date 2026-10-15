export interface PanelSizing {
    default: number;
    min: number;
    max: number;
}
export declare const SIDEBAR_WIDTH: PanelSizing;
export declare const RIGHT_PANEL_WIDTH: PanelSizing;
interface PanelPreferencesState {
    sidebarWidth: number;
    rightPanelWidth: number;
    setSidebarWidth: (width: number) => void;
    setRightPanelWidth: (width: number) => void;
}
export declare const usePanelPreferencesStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<PanelPreferencesState>, "setState" | "persist"> & {
    setState(partial: PanelPreferencesState | Partial<PanelPreferencesState> | ((state: PanelPreferencesState) => PanelPreferencesState | Partial<PanelPreferencesState>), replace?: false | undefined): unknown;
    setState(state: PanelPreferencesState | ((state: PanelPreferencesState) => PanelPreferencesState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import('zustand/middleware').PersistOptions<PanelPreferencesState, PanelPreferencesState, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: PanelPreferencesState) => void) => () => void;
        onFinishHydration: (fn: (state: PanelPreferencesState) => void) => () => void;
        getOptions: () => Partial<import('zustand/middleware').PersistOptions<PanelPreferencesState, PanelPreferencesState, unknown>>;
    };
}>;
export {};
