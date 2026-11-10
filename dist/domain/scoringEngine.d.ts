import { ScoringMap } from '../types/survey';
import { ScoreResult } from '../types/response';
export declare function computeScore(scoringMap: ScoringMap | undefined, answers: Record<string, unknown>, categories: {
    id: string;
    label: string;
}[] | undefined, passThreshold: number | undefined): ScoreResult;
