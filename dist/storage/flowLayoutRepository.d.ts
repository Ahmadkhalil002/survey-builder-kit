import { FlowLayoutRecord } from './db';
export declare const flowLayoutRepository: {
    get(surveyId: string): Promise<FlowLayoutRecord | undefined>;
    savePosition(surveyId: string, pageId: string, position: {
        x: number;
        y: number;
    }): Promise<string>;
    removePosition(surveyId: string, pageId: string): Promise<string | void>;
};
