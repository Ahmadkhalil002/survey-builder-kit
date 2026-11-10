export interface ResizeHandleProps {
    edge: 'left' | 'right';
    width: number;
    min: number;
    max: number;
    defaultWidth: number;
    onChange: (width: number) => void;
    label: string;
}
export declare function ResizeHandle({ edge, width, min, max, defaultWidth, onChange, label }: ResizeHandleProps): import("react").JSX.Element;
