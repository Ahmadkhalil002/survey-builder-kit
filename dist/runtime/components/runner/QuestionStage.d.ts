import { QuestionDef } from '../../../types/survey';
export type StageDirection = 'forward' | 'backward';
export interface QuestionStageProps {
    question: QuestionDef;
    questionNumber: number;
    categoryLabel?: string;
    value: unknown;
    onChange: (value: unknown) => void;
    onAdvance: () => void;
    onBack: () => void;
    onSkip: () => void;
    canGoBack: boolean;
    canSkip: boolean;
    canAttemptAdvance: boolean;
    isFinalQuestion: boolean;
    error?: string;
    direction: StageDirection;
}
export declare function QuestionStage({ question, questionNumber, categoryLabel, value, onChange, onAdvance, onBack, onSkip, canGoBack, canSkip, canAttemptAdvance, isFinalQuestion, error, direction, }: QuestionStageProps): import("react").JSX.Element;
