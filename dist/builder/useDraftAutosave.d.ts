import { Survey } from '../types/survey';
export type SaveStatus = 'saved' | 'unsaved' | 'saving' | 'error';
export declare function useDraftAutosave(survey: Survey): SaveStatus;
