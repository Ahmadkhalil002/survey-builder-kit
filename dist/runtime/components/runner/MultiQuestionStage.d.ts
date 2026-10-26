import { QuestionDef } from '../../../types/survey';
import { StageDirection } from './QuestionStage';
export interface MultiQuestionStageProps {
    questions: QuestionDef[];
    pageTitle: string;
    pageNumber: number;
    answers: Record<string, unknown>;
    onChangeQuestion: (questionId: string, value: unknown) => void;
    onAdvance: () => void;
    onBack: () => void;
    canGoBack: boolean;
    canAttemptAdvance: boolean;
    isFinalPage: boolean;
    errors: Record<string, string>;
    direction: StageDirection;
}
export declare function MultiQuestionStage({ questions, pageTitle, pageNumber, answers, onChangeQuestion, onAdvance, onBack, canGoBack, canAttemptAdvance, isFinalPage, errors, direction, }: MultiQuestionStageProps): import("react").JSX.Element;
