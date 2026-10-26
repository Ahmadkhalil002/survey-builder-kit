import { SurveyPage } from '../types/survey';
export declare function resolveNextPage(page: SurveyPage, answers: Record<string, unknown>): string | 'end';
export declare function isPageBlockedByRule(page: SurveyPage, answers: Record<string, unknown>): boolean;
