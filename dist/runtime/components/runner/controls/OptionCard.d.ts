export interface OptionCardProps {
    label: string;
    badge?: string;
    selected: boolean;
    indicatorShape: 'circle' | 'square';
    onClick: () => void;
    tabIndex?: number;
}
export declare const OptionCard: import('react').ForwardRefExoticComponent<OptionCardProps & import('react').RefAttributes<HTMLDivElement>>;
