import { Survey } from '../types/survey';
import { AnswerEntry } from '../types/response';
/**
 * Builds the rich, self-describing `answers` array stored in a
 * SurveyResponse -- a presentation/export-time SNAPSHOT of what the
 * respondent actually saw and chose, not the live runtime shape. The
 * player store, JSONForms binding, AJV validation, and the branching/
 * scoring engines all keep reading/writing the plain `questionId -> raw
 * value` map exactly as they do today; this function is called once, at
 * submit time, to translate that into something a reader doesn't need the
 * exact survey version to understand. Each entry carries its own
 * `questionId`/`slug`, so the array's order is just "the order the
 * respondent encountered these" (see below) -- not a lookup key.
 *
 * Walks `meta.visitedPageIds` (the actual path taken -- not `survey.pages`
 * in survey order) so a page the branching skipped contributes no entries,
 * and re-applies each question's own `visibilityRule` against the final
 * answers so a question hidden on its page for this particular answer set
 * doesn't get a spurious entry either -- both exactly mirroring what the
 * respondent actually saw, and both reflected in the resulting array's
 * order for free.
 */
export declare function buildResponsePayload(survey: Survey, rawAnswers: Record<string, unknown>, meta: {
    visitedPageIds: string[];
}): AnswerEntry[];
