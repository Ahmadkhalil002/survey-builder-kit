import { Survey } from '../types/survey';
export declare const builderDraftRepository: {
    get(instanceId: string): Promise<Survey | undefined>;
    save(instanceId: string, survey: Survey): Promise<string>;
    remove(instanceId: string): Promise<void>;
};
