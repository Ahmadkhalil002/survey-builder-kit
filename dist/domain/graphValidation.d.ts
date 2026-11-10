import { Survey } from '../types/survey';
export interface BranchTargetValidation {
    valid: boolean;
    reason?: string;
}
export declare function wouldCreateCycle(survey: Survey, fromPageId: string, toPageId: string): boolean;
export declare function validateBranchTarget(survey: Survey, fromPageId: string, toPageId: string): BranchTargetValidation;
