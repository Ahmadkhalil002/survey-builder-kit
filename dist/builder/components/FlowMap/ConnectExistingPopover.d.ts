export interface ConnectExistingCandidate {
    id: string;
    title: string;
}
export interface ConnectExistingState {
    anchorEl: HTMLElement;
    pageId: string;
    pageTitle: string;
    handleType: 'source' | 'target';
    candidates: ConnectExistingCandidate[];
}
export declare function ConnectExistingPopover({ state, onClose, onSelect, }: {
    state: ConnectExistingState | null;
    onClose: () => void;
    onSelect: (pageId: string) => void;
}): import("react").JSX.Element;
