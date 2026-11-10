import { Edge, EdgeProps } from '@xyflow/react';
export interface BranchEdgeData extends Record<string, unknown> {
    variant: 'positive' | 'neutral' | 'disqualifying';
    isDefault: boolean;
    ruleId?: string;
    color: string;
    onLabelClick?: () => void;
    onDeleteRequest?: () => void;
}
export type BranchEdgeType = Edge<BranchEdgeData, 'branchEdge'>;
export declare const BranchEdge: import('react').MemoExoticComponent<({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, data, markerEnd, style, selected, }: EdgeProps<BranchEdgeType>) => import("react").JSX.Element>;
