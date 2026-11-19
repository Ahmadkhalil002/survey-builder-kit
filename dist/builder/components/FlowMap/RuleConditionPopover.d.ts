import { ConditionLeaf } from '../../../types/survey';
import { FieldOption } from '../ConditionEditor';
export interface RuleConditionPopoverProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    fields: FieldOption[];
    initialLeaf?: ConditionLeaf | null;
    destinationLabel: string;
    onClose: () => void;
    onSave: (leaf: ConditionLeaf) => void;
    onEditFullRule?: () => void;
}
export declare function RuleConditionPopover({ open, anchorEl, fields, initialLeaf, destinationLabel, onClose, onSave, onEditFullRule, }: RuleConditionPopoverProps): import("react").JSX.Element;
