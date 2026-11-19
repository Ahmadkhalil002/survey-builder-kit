import { MouseEvent } from 'react';
import { Node, NodeProps } from '@xyflow/react';
import { FlowPageNodeData } from '../../../domain/flowLayout';
export interface PageNodeData extends FlowPageNodeData {
    isSnapTarget?: boolean;
    isActivePage?: boolean;
    autoFocusRename?: boolean;
    onAutoFocusHandled?: () => void;
    onTargetDotClick?: (event: MouseEvent<HTMLElement>) => void;
    onSourceDotClick?: (event: MouseEvent<HTMLElement>) => void;
}
export type PageNodeType = Node<PageNodeData, 'pageNode'>;
export declare const PageNode: import('react').MemoExoticComponent<({ id, data, selected }: NodeProps<PageNodeType>) => import("react").JSX.Element>;
