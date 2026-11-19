import { PortalTarget } from '../../../SurveyRunner';
export type ResolvedPortalTarget = Element | null | undefined;
export declare function usePortalTarget(propName: string, target: PortalTarget | undefined): ResolvedPortalTarget;
export declare function portalWrapperClassName(bgColor: string | undefined, stableClassName: string): string;
