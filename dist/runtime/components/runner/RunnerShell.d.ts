import { PortalTarget } from '../../../SurveyRunner';
export interface RunnerShellProps {
    exitPath?: string;
    bgColor?: string;
    renderAssessmentTo?: PortalTarget;
    renderProgressBarTo?: PortalTarget;
    renderStepsTo?: PortalTarget;
    renderExitTo?: PortalTarget;
}
export declare function RunnerShell({ exitPath, bgColor, renderAssessmentTo, renderProgressBarTo, renderStepsTo, renderExitTo, }: RunnerShellProps): import("react").JSX.Element | null;
