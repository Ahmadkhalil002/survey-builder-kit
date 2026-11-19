import { DisqualifyingNotice, QuestionDef, SurveyPage } from '../../../types/survey';
export declare function validateQuestion(page: SurveyPage, question: QuestionDef, answers: Record<string, unknown>): string[];
export declare function getDisqualifyingNotices(question: QuestionDef, value: unknown): DisqualifyingNotice[];
export declare function canAttemptAdvance(question: QuestionDef, value: unknown): boolean;
