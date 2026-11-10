export interface FlowPosition {
    x: number;
    y: number;
}
export interface FlowLayoutState {
    surveyId: string | null;
    overrides: Record<string, FlowPosition>;
    loadForSurvey: (surveyId: string) => Promise<void>;
    setOverride: (pageId: string, position: FlowPosition) => void;
    clearOverride: (pageId: string) => void;
}
export declare function createFlowLayoutStore(): import('zustand').StoreApi<FlowLayoutState>;
export type FlowLayoutStoreApi = ReturnType<typeof createFlowLayoutStore>;
declare const FlowLayoutStoreContext: import('react').Context<import('zustand').StoreApi<FlowLayoutState> | null>, useFlowLayoutStore: <T>(selector: (state: FlowLayoutState) => T) => T, useFlowLayoutStoreApi: () => import('zustand').StoreApi<FlowLayoutState>;
export { FlowLayoutStoreContext, useFlowLayoutStore, useFlowLayoutStoreApi };
