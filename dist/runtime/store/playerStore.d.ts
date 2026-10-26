import { Survey } from '../../types/survey';
import { ScoreResult } from '../../types/response';
export interface PlayerState {
    survey: Survey | null;
    currentPageId: string | null;
    answers: Record<string, unknown>;
    predefinedQuestionIds: Set<string>;
    initialAnswerQuestionIds: Set<string>;
    visitedPageStack: string[];
    finished: boolean;
    score: ScoreResult | null;
    loadSurvey: (survey: Survey) => void;
    setAnswers: (data: Record<string, unknown>) => void;
    setPredefinedQuestionIds: (ids: Set<string>) => void;
    setInitialAnswerQuestionIds: (ids: Set<string>) => void;
    goNext: () => void;
    goBack: () => void;
    reset: () => void;
}
export declare function createPlayerStore(): import('zustand').StoreApi<PlayerState>;
export type PlayerStoreApi = ReturnType<typeof createPlayerStore>;
declare const PlayerStoreContext: import('react').Context<import('zustand').StoreApi<PlayerState> | null>, usePlayerStore: <T>(selector: (state: PlayerState) => T) => T, usePlayerStoreApi: () => import('zustand').StoreApi<PlayerState>;
export { PlayerStoreContext, usePlayerStore, usePlayerStoreApi };
