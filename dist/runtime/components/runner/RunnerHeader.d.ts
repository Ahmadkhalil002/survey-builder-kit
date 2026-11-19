import { ResolvedPortalTarget } from './usePortalTarget';
export interface RunnerHeaderProps {
    currentStep: number;
    totalSteps: number;
    /** Shown as the "Exit" link in the header, only when provided -- see SurveyRunnerProps.exitPath, which is what actually supplies this. */
    onExit?: () => void;
    /**
     * Resolved SurveyRunnerProps.renderStepsTo -- unlike most `render*To`
     * pieces, this one has no built-in spot to fall back to: RunnerShell
     * already coerces an omitted prop to `null` before resolving it (see its
     * own comment), so this is only ever `null` (don't render) or a real
     * `Element` (portal there) by the time it reaches this component.
     */
    stepsTarget: ResolvedPortalTarget;
    /** Resolved SurveyRunnerProps.renderExitTo -- same `null`-or-`Element` shape as `stepsTarget` above. */
    exitTarget: ResolvedPortalTarget;
    /** See SurveyRunnerProps.bgColor -- only used to stamp it on a portaled piece's wrapper (see portalWrapperClassName). */
    bgColor?: string;
}
export declare function RunnerHeader({ currentStep, totalSteps, onExit, stepsTarget, exitTarget, bgColor }: RunnerHeaderProps): import("react").JSX.Element;
