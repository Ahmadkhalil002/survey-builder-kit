import { QuestionDef } from '../types/survey';
export declare function calculateAgeYears(dateStr: string, today?: Date): number | null;
export declare function validateDateAge(question: QuestionDef, value: unknown, today?: Date): string | null;
