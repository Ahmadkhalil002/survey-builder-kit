import { Survey } from './types/survey';
import { newSurvey } from './builder/store/builderStore';
export interface SurveyBuilderProps {
    /** Existing survey JSON to edit, or null/undefined to start a new one. */
    survey?: Survey | null;
    /** Fires (debounced ~500ms) as the author edits. */
    onChange?: (survey: Survey) => void;
    /** Fires when the author clicks the header's Save/Publish action (or presses Ctrl/Cmd+S). */
    onSave?: (survey: Survey) => void;
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
     * usage throughout the component (buttons, selected states, the flow
     * map's active-node styling, etc.) reads from the theme, so this one
     * value reaches all of them. `dark`/`light`/`contrastText` are derived
     * from it automatically. Unlike `bgColor`, this DOES re-render under a
     * different theme object -- there's no way to override MUI's `sx={{
     * color: 'primary.main' }}` tokens from plain host CSS the way `bgColor`
     * overrides literal CSS properties.
     */
    primaryColor?: string;
}
/**
 * The full survey authoring UI (page list, question editor, branching/
 * scoring, flow map) as a single embeddable component. Client-only -- see
 * the README's SSR caveat.
 */
export declare function SurveyBuilder(props: SurveyBuilderProps): import("react").JSX.Element;
export { newSurvey };
