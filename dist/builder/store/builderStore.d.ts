import { BranchRule, ConditionGroup, QuestionDef, QuestionType, ScoringEntry, Survey, SurveyPage } from '../../types/survey';
import { FlowLayoutStoreApi } from './flowLayoutStore';
import { SnackbarStoreApi } from './snackbarStore';
export declare function newSurvey(title?: string): Survey;
export type BuilderViewMode = 'builder' | 'flow';
export interface BuilderState {
    survey: Survey;
    selectedPageId: string | null;
    selectedQuestionId: string | null;
    viewMode: BuilderViewMode;
    freshQuestionId: string | null;
    loadSurvey: (survey: Survey) => void;
    setSurveyTitle: (title: string) => void;
    setSurveyType: (type: string) => void;
    setViewMode: (mode: BuilderViewMode) => void;
    addPage: () => void;
    duplicatePage: (pageId: string) => void;
    removePage: (pageId: string) => void;
    reorderPage: (fromIndex: number, toIndex: number) => void;
    setStartPage: (pageId: string) => void;
    selectPage: (pageId: string) => void;
    clearSelectedPage: () => void;
    setPageTitle: (pageId: string, title: string) => void;
    setPageBlocksSubmission: (pageId: string, blocksSubmission: boolean) => void;
    setDefaultNextPage: (pageId: string, nextPageId: string | 'end') => void;
    setBranchRules: (pageId: string, branch: SurveyPage['branch']) => void;
    addBranchRule: (pageId: string, rule: BranchRule) => void;
    updateBranchRule: (pageId: string, ruleId: string, patch: Partial<BranchRule>) => void;
    removeBranchRule: (pageId: string, ruleId: string) => void;
    reorderBranchRule: (pageId: string, fromIndex: number, toIndex: number) => void;
    addQuestion: (pageId: string, type: QuestionType, atIndex?: number) => void;
    duplicateQuestion: (questionId: string) => void;
    removeQuestion: (questionId: string) => void;
    reorderQuestion: (pageId: string, fromIndex: number, toIndex: number) => void;
    selectQuestion: (questionId: string | null) => void;
    updateQuestion: (questionId: string, patch: Partial<Omit<QuestionDef, 'id'>>) => void;
    finalizeQuestionId: (questionId: string) => void;
    setVisibilityRule: (questionId: string, group: ConditionGroup | null) => void;
    setScoringEnabled: (enabled: boolean) => void;
    setScoringForQuestion: (questionId: string, entry: ScoringEntry | undefined) => void;
    setPassThreshold: (threshold: number | undefined) => void;
    setScoringCategories: (categories: {
        id: string;
        label: string;
    }[]) => void;
    history: {
        past: Survey[];
        future: Survey[];
    };
    undo: () => void;
    redo: () => void;
}
export interface BuilderStoreDeps {
    flowLayoutStore: FlowLayoutStoreApi;
    snackbarStore: SnackbarStoreApi;
}
export declare function createBuilderStore(deps: BuilderStoreDeps, initialSurvey?: Survey): import('zustand').StoreApi<BuilderState>;
export type BuilderStoreApi = ReturnType<typeof createBuilderStore>;
declare const BuilderStoreContext: import('react').Context<import('zustand').StoreApi<BuilderState> | null>, useBuilderStore: <T>(selector: (state: BuilderState) => T) => T, useBuilderStoreApi: () => import('zustand').StoreApi<BuilderState>;
export { BuilderStoreContext, useBuilderStore, useBuilderStoreApi };
export declare function selectedQuestion(state: BuilderState): QuestionDef | null;
export declare function selectedPage(state: BuilderState): SurveyPage | undefined;
