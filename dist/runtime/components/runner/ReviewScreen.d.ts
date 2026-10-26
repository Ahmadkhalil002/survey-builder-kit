import { QuestionDef } from '../../../types/survey';
export interface ReviewItem {
    question: QuestionDef;
    answerText: string;
}
export interface ReviewScreenProps {
    items: ReviewItem[];
    onEdit: (questionId: string) => void;
    onSubmit: () => void;
}
export declare function ReviewScreen({ items, onEdit, onSubmit }: ReviewScreenProps): import("react").JSX.Element;
