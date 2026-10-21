import { Survey } from './types/survey';
import { PredefinedAnswer, SurveyResponse } from './types/response';
export interface SurveyRunnerProps {
    /** The survey to present to a respondent. */
    survey: Survey;
    /**
     * Resume a partially-answered survey. Only read on mount (and if
     * `survey.id` later changes). Each question still renders normally,
     * pre-filled with its value -- unlike `predefinedAnswers`, nothing is
     * ever hidden on a MIXED page. But if every question on a page already
     * has a value from `initialAnswers`, that whole page is skipped outright
     * (the respondent never lands on it) -- there would be nothing left to
     * show or answer there anyway. (This can't be triggered by the
     * respondent finishing a page themselves -- only questions that already
     * had a value here BEFORE the respondent started count.)
     *
     * One reserved key: `__turnstileSiteKey`, if present, is pulled out and
     * used as the Cloudflare Turnstile site key for any `type: 'turnstile'`
     * question in this survey -- it's never treated as a real question's
     * answer (there's no question with that id), so it never shows up in
     * `onSubmit`/`onAnswer`:
     *
     * ```tsx
     * <SurveyRunner
     *   survey={survey}
     *   initialAnswers={{ __turnstileSiteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY }}
     * />
     * ```
     */
    initialAnswers?: Record<string, unknown>;
    /**
     * Answers already known before the respondent starts -- e.g. from a
     * prior step in a larger flow, or profile data already on file. Only
     * read on mount (and again if `survey.id` changes), same as
     * `initialAnswers` -- but unlike `initialAnswers`, each of these
     * questions is also hidden from the respondent entirely, not just
     * pre-filled, even on a page with other, non-predefined questions still
     * showing. A page where every question is predefined (or otherwise
     * already fully covered by `initialAnswers`) is skipped outright.
     *
     * The value still counts as a real answer for validation/branching/
     * scoring, and shows up normally in `onSubmit`/`onAnswer` -- this only
     * changes what's rendered, not what's considered answered. If both
     * `initialAnswers` and `predefinedAnswers` set the same question,
     * `predefinedAnswers` wins (and that question is hidden).
     */
    predefinedAnswers?: PredefinedAnswer[];
    /** Fires (debounced ~500ms) as the respondent answers, for autosave-style host integration. */
    onChange?: (answers: Record<string, unknown>) => void;
    /**
     * Fires once per page advance -- when the respondent moves on to the
     * next page, not on every keystroke/selection within a page (see
     * `onChange` for that) -- with `submitted: false` and `response.answers`
     * scoped to just that page's questions flagged `hasTrigger: true`
     * (QuestionDef); a page with none of those doesn't fire at all. At that
     * point `response.completedAt` is omitted (the survey isn't finished
     * yet) and `response.id` is this one call's own id, not a stable id
     * shared across calls.
     *
     * At actual completion, this fires once more, differently: `submitted:
     * true`, and `response.answers` is EVERY answer from the whole survey --
     * every page, `hasTrigger` or not -- the same full set `onSubmit` itself
     * gets (a separate, independently-built `SurveyResponse` -- the two
     * calls' `response.id`s don't match each other).
     *
     * `response` is a full `SurveyResponse` either way -- same shape as
     * `onSubmit`'s own parameter (id/surveyId/title/type/surveyVersion/
     * answersFormatVersion/answers/visitedPageIds/score/startedAt/
     * completedAt) -- not just a bare `AnswerEntry[]`, so a host doesn't have
     * to track survey-level context (which survey, which run, live score so
     * far) separately from the answers themselves.
     *
     * Does not fire on back-navigation (including jumping back via the
     * review screen's "Edit").
     */
    onAnswer?: (response: SurveyResponse, submitted: boolean) => void;
    /**
     * Fires once, when the respondent reaches the end of the survey, with a
     * full SurveyResponse -- not just the raw answers -- so a host doesn't
     * have to re-derive visitedPageIds/score/timestamps by hand. `id` is a
     * freshly generated id for this one run (a host that wants to dedupe
     * retakes should key off `surveyId` + `completedAt`, not `id`).
     */
    onSubmit?: (response: SurveyResponse) => void;
    /**
     * Shows an "Exit" link in the header when provided; clicking it navigates
     * the browser to this path/URL. A full browser navigation (`window.
     * location`), not client-side routing -- this library has no router of
     * its own and can't depend on one (react-router isn't a peer dependency),
     * so this is the only way to leave that works regardless of what, if
     * anything, the host uses for routing. Omit this prop to hide the Exit
     * link entirely.
     */
    exitPath?: string;
    /**
     * Added to this component's own root element's `className`, nothing more
     * -- not a DOM node or a ref, despite the name. Lets a host theme ONE
     * mounted instance purely from its own CSS (`.acme-blue-theme { ... }`),
     * without touching this library's internals or re-rendering with a
     * different theme object per instance. Omit it for no extra class.
     */
    bgColor?: string;
    /**
     * Overrides the library's default primary color (`#4f46e5`) for this one
     * mounted instance -- every `primary.main`/`.dark`/`.light`/`.contrastText`
     * usage throughout the component (the progress rail, selected-option
     * cards/borders, the submit/continue button, etc.) reads from the theme,
     * so this one value reaches all of them. `dark`/`light`/`contrastText`
     * are derived from it automatically. Unlike `bgColor`, this DOES
     * re-render under a different theme object -- there's no way to override
     * MUI's `sx={{ color: 'primary.main' }}` tokens from plain host CSS the
     * way `bgColor` overrides literal CSS properties.
     */
    primaryColor?: string;
}
/**
 * Presents a survey to a respondent and reports their answers back to the
 * host. Client-only (uses no SSR-unsafe browser APIs directly, but renders
 * nothing useful without a DOM) -- see the README's SSR caveat.
 */
export declare function SurveyRunner(props: SurveyRunnerProps): import("react").JSX.Element;
