import { QuestionDef } from '../../../../types/survey';
export interface QuestionControlProps {
    question: QuestionDef;
    value: unknown;
    onChange: (value: unknown) => void;
    onAdvance: () => void;
    autoFocus?: boolean;
}
