import { QuestionType } from '../types/survey';
export interface QuestionTypeMeta {
    type: QuestionType;
    paletteLabel: string;
    defaultLabel: string;
}
export declare const QUESTION_TYPES: QuestionTypeMeta[];
export declare function questionTypeMeta(type: QuestionType): QuestionTypeMeta;
