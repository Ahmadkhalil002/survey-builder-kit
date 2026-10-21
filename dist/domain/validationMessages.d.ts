import { ErrorObject } from 'ajv';
import { QuestionDef } from '../types/survey';
export interface ValidationMessage {
    questionId: string;
    message: string;
}
export declare function describeValidationErrors(errors: ErrorObject[], questions: QuestionDef[]): ValidationMessage[];
