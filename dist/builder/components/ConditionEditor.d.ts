import { ConditionGroup, ConditionLeaf, QuestionType } from '../../types/survey';
export interface FieldOption {
    scope: string;
    label: string;
    questionType: QuestionType;
    choices?: string[];
}
interface ConditionEditorProps {
    value: ConditionGroup | null;
    onChange: (group: ConditionGroup | null) => void;
    availableFields: FieldOption[];
    emptyLabel?: string;
}
export declare function ValueInput({ leaf, field, onChange, }: {
    leaf: ConditionLeaf;
    field: FieldOption | undefined;
    onChange: (value: unknown) => void;
}): import("react").JSX.Element;
export declare function ConditionEditor({ value, onChange, availableFields, emptyLabel }: ConditionEditorProps): import("react").JSX.Element;
export {};
