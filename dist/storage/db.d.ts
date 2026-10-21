import { default as Dexie, EntityTable } from 'dexie';
import { Survey } from '../types/survey';
export interface FlowLayoutRecord {
    surveyId: string;
    positions: Record<string, {
        x: number;
        y: number;
    }>;
}
export interface BuilderDraftRecord {
    instanceId: string;
    surveyId: string;
    survey: Survey;
    savedAt: string;
}
export declare const db: Dexie & {
    flowLayouts: EntityTable<FlowLayoutRecord, "surveyId">;
    builderDrafts: EntityTable<BuilderDraftRecord, "instanceId">;
};
