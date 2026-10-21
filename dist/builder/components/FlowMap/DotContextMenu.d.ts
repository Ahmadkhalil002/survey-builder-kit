export interface DotContextMenuState {
    anchorEl: HTMLElement;
    pageId: string;
    pageTitle: string;
    handleType: 'source' | 'target';
    isStartPage: boolean;
}
export declare function DotContextMenu({ state, onClose, onAddPage, onConnectExisting, onSetAsStart, onDuplicate, onDelete, }: {
    state: DotContextMenuState | null;
    onClose: () => void;
    onAddPage: () => void;
    onConnectExisting: () => void;
    onSetAsStart: () => void;
    onDuplicate: () => void;
    onDelete: () => void;
}): import("react").JSX.Element;
