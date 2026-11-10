import { QuestionType, Survey, SurveyPage } from '../types/survey';
export interface FlowPageNodeData {
    pageId: string;
    title: string;
    questionCount: number;
    iconKind: PageIconKind;
    isConditionalOnly: boolean;
    isBranchPoint: boolean;
    isUnconnected: boolean;
    flowOrderDiffers: boolean;
    blocksSubmission: boolean;
    endsFlow: boolean;
    [key: string]: unknown;
}
export interface FlowPageNode {
    id: string;
    type: 'pageNode';
    position: {
        x: number;
        y: number;
    };
    data: FlowPageNodeData;
}
export type FlowEdgeVariant = 'positive' | 'neutral' | 'disqualifying';
export interface FlowPageEdge {
    id: string;
    source: string;
    target: string;
    label: string;
    data: {
        variant: FlowEdgeVariant;
        isDefault: boolean;
        ruleId?: string;
    };
}
export interface FlowStartMarker {
    id: string;
    position: FlowPosition;
    edge: {
        id: string;
        source: string;
        target: string;
    };
}
export interface FlowDisqualifiedEdge {
    id: string;
    source: string;
    target: string;
    label: string;
}
export interface FlowDisqualifiedTerminal {
    id: string;
    position: FlowPosition;
    edges: FlowDisqualifiedEdge[];
}
export interface PageFlow {
    nodes: FlowPageNode[];
    edges: FlowPageEdge[];
    startMarker: FlowStartMarker | null;
    disqualifiedTerminal: FlowDisqualifiedTerminal | null;
}
export interface FlowPosition {
    x: number;
    y: number;
}
export declare const NODE_WIDTH = 190;
export declare const NODE_HEIGHT = 100;
export declare const START_NODE_ID = "__start__";
export declare const START_NODE_WIDTH = 88;
export declare const START_NODE_HEIGHT = 34;
export declare const DISQUALIFIED_NODE_ID = "__disqualified__";
export declare const DISQUALIFIED_NODE_WIDTH = 132;
export declare const DISQUALIFIED_NODE_HEIGHT = 34;
export declare function isPageConditionalOnly(survey: Survey, pageId: string): boolean;
export declare function isPageUnconnected(survey: Survey, pageId: string): boolean;
export interface FlowOverviewStats {
    pageCount: number;
    branchPointCount: number;
    pathsToEndingCount: number;
}
export declare function computeFlowOverviewStats(survey: Survey): FlowOverviewStats;
export declare function pageFlowOrderDiffers(survey: Survey, pageId: string): boolean;
export type PageIconKind = 'warning' | 'branch' | 'empty' | QuestionType;
export declare function pageHasDisqualifyingOption(page: SurveyPage): boolean;
export declare function pageIconKind(page: SurveyPage): PageIconKind;
export declare function pagesToFlow(survey: Survey, overrides?: Record<string, FlowPosition>): PageFlow;
export interface ProgressEstimate {
    currentStep: number;
    totalSteps: number;
}
export declare function estimateProgress(survey: Survey, visitedPageStack: string[]): ProgressEstimate;
