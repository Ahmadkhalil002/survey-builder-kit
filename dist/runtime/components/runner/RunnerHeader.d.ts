export interface RunnerHeaderProps {
    surveyTitle: string;
    currentStep: number;
    totalSteps: number;
    canGoBack: boolean;
    onBack: () => void;
    /** Shown as the "Exit" link in the header, only when provided -- see SurveyRunnerProps.exitPath, which is what actually supplies this. */
    onExit?: () => void;
}
export declare function RunnerHeader({ surveyTitle, currentStep, totalSteps, canGoBack, onBack, onExit }: RunnerHeaderProps): import("react").JSX.Element;
