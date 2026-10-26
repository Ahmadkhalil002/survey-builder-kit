import { JsonSchema, UISchemaElement } from '@jsonforms/core';
export type ConditionOperator = 'eq' | 'neq' | 'contains' | 'gt' | 'gte' | 'lt' | 'lte' | 'isEmpty' | 'isNotEmpty';
export interface ConditionLeaf {
    fieldPath: string;
    operator: ConditionOperator;
    value?: unknown;
}
export interface ConditionGroup {
    logic: 'AND' | 'OR';
    conditions: (ConditionLeaf | ConditionGroup)[];
}
export declare function isConditionGroup(node: ConditionLeaf | ConditionGroup): node is ConditionGroup;
export interface BranchRule {
    id: string;
    when: ConditionGroup;
    action?: 'goToPage' | 'block';
    goToPageId: string | 'end';
}
export interface ScoringEntry {
    categoryId?: string;
    optionScores?: Record<string, number>;
    valueScore?: number;
    linearScore?: {
        min: number;
        max: number;
        minPoints: number;
        maxPoints: number;
    };
}
export type ScoringMap = Record<string, ScoringEntry>;
export type QuestionType = 'shortText' | 'longText' | 'singleChoice' | 'multipleChoice' | 'rating' | 'nps' | 'number' | 'boolean' | 'date' | 'label' | 'turnstile';
export interface QuestionDef {
    id: string;
    slug: string;
    title: string;
    type: QuestionType;
    label: string;
    description?: string;
    descriptionColor?: string;
    required?: boolean;
    requiredMessage?: string;
    choices?: string[];
    min?: number;
    max?: number;
    rangeMessage?: string;
    pattern?: string;
    patternMessage?: string;
    minLength?: number;
    maxLength?: number;
    lengthMessage?: string;
    minYears?: number;
    maxYears?: number;
    yearsMessage?: string;
    visibilityRule?: ConditionGroup | null;
    disqualifyingOptions?: Record<string, DisqualifyingNotice>;
    hasTrigger?: boolean;
    turnstileSiteKey?: string;
}
export interface DisqualifyingNotice {
    title: string;
    body?: string;
}
export interface SurveyPage {
    id: string;
    title: string;
    questions: QuestionDef[];
    schema: JsonSchema;
    uischema: UISchemaElement;
    branch: BranchRule[];
    defaultNextPageId: string | 'end';
    blocksSubmission?: boolean;
}
export declare const CURRENT_SCHEMA_VERSION = 1;
export interface Survey {
    id: string;
    title: string;
    type?: string;
    description?: string;
    schemaVersion: number;
    version: number;
    createdAt: string;
    updatedAt: string;
    pages: SurveyPage[];
    startPageId: string;
    scoring?: {
        enabled: boolean;
        categories?: {
            id: string;
            label: string;
        }[];
        passThreshold?: number;
    };
    scoringMap?: ScoringMap;
}
