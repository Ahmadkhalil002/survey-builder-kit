import { ComponentType } from 'react';
import { QuestionDef } from '../../../../types/survey';
import { QuestionControlProps } from './types';
export declare const MANY_OPTIONS_THRESHOLD = 6;
export declare function controlForQuestion(question: QuestionDef): ComponentType<QuestionControlProps>;
export type { QuestionControlProps };
