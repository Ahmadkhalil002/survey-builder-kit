import { Survey } from './types/survey';
import { PredefinedAnswer, SurveyResponse } from './types/response';
/**
 * Where one piece of the runner's UI renders -- shared by the four
 * `render*To` props below. A string is a CSS selector, resolved with
 * `document.querySelector` on the client only (never during render, so
 * importing/rendering this library on the server stays safe -- see the
 * README's SSR note); an `HTMLElement` is used directly, no lookup needed.
 *
 * - A selector string or `HTMLElement`: the piece is portaled there (via
 *   `createPortal`, not a separate React root -- it still shares this
 *   runner's state/theme/Emotion cache, so advancing a page updates it like
 *   anything else in the tree). If a selector matches nothing, a `console.warn`
 *   names the prop and the selector, and nothing renders for that piece.
 * - `null` or `""`: the piece doesn't render anywhere.
 * - Omit the prop entirely (`undefined`): see each prop's own doc comment --
 *   `renderAssessmentTo` keeps rendering the quiz body in its built-in spot
 *   (100% backward-compatible, so a survey is still usable with zero config);
 *   the other three (`renderProgressBarTo`/`renderStepsTo`/`renderExitTo`)
 *   are hidden by default, the same as passing `null` -- there's no way to
 *   get that chrome back in its old built-in spot, only by portaling it
 *   somewhere with a real target.
 */
export type PortalTarget = string | HTMLElement | null;
export interface SurveyRunnerProps {
    /** The survey to present to a respondent. */
    survey: Survey;
    /**
     * Resume a partially-answered survey. Only read on mount (and if
     * `survey.id` later changes). Each question still renders normally, pre-
     * filled with its value and fully visible/editable -- unlike
     * `predefinedAnswers`, nothing is ever hidden, and a page is never
     * skipped just because `initialAnswers` already covers every question on
     * it; the respondent still lands on it and sees those values populated,
     * free to change them before continuing. (`predefinedAnswers` below is
     * the one that can skip a page outright, by actually hiding questions.)
     */
    initialAnswers?: Record<string, unknown>;
    /**
     * Answers already known before the respondent starts -- e.g. from a
     * prior step in a larger flow, or profile data already on file. Only
     * read on mount (and again if `survey.id` changes), same as
     * `initialAnswers` -- but unlike `initialAnswers`, each of these
     * questions is also hidden from the respondent entirely, not just
     * pre-filled, even on a page with other, non-predefined questions still
     * showing. A page where every question is predefined is skipped
     * outright (there'd be nothing left to show there at all).
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
    /**
     * Opaque pass-through value -- this library does nothing with it beyond
     * handing it back unchanged on every `SurveyResponse` (`onAnswer`'s and
     * `onSubmit`'s), so a host can stamp a response with its own identifier
     * (e.g. which SKU/plan this assessment run belongs to) without this
     * library needing to know what it means.
     */
    serviceSku?: string;
    /**
     * Where the quiz body (whichever question stage, or the end-of-survey
     * review screen, is currently showing) renders -- see `PortalTarget`'s
     * own comment for the shared undefined/target/null semantics. Omit this
     * to keep it in its built-in spot, between the header and the bottom of
     * the runner, exactly as today.
     */
    renderAssessmentTo?: PortalTarget;
    /**
     * Where the thin progress bar renders -- see `PortalTarget`'s own
     * comment. Unlike `renderAssessmentTo` above, this one has no built-in
     * spot to fall back to: it's HIDDEN by default (omitting this prop behaves
     * exactly like passing `null`), not shown pinned to the runner's top edge
     * -- pass a selector/`HTMLElement` to see it at all.
     */
    renderProgressBarTo?: PortalTarget;
    /**
     * Where the "X of N" step counter + dots render -- see `PortalTarget`'s
     * own comment. HIDDEN by default, same as `renderProgressBarTo` above --
     * omitting this prop behaves exactly like passing `null`, not "shown in
     * the built-in header." Pass a selector/`HTMLElement` to see it at all.
     */
    renderStepsTo?: PortalTarget;
    /**
     * Where the "Exit" link renders -- see `PortalTarget`'s own comment.
     * HIDDEN by default, same as `renderProgressBarTo`/`renderStepsTo` above.
     * Also only matters when `exitPath` is set at all; with no `exitPath`,
     * Exit stays hidden regardless of this prop, same as today.
     */
    renderExitTo?: PortalTarget;
}
/**
 * Presents a survey to a respondent and reports their answers back to the
 * host. Client-only (uses no SSR-unsafe browser APIs directly, but renders
 * nothing useful without a DOM) -- see the README's SSR caveat.
 */
export declare function SurveyRunner(props: SurveyRunnerProps): import("react").JSX.Element;
/**
 * Element-factory wrapper around <SurveyRunner> -- same props, returned as a
 * React element instead of written as JSX. Useful when the props are
 * assembled somewhere that isn't itself writing JSX for this element (e.g. a
 * plain function); the returned element still has to be rendered by React as
 * usual (e.g. `{renderAssessment(props)}` inside a component's JSX).
 */
export declare function renderAssessment(props: SurveyRunnerProps): import("react").JSX.Element;
