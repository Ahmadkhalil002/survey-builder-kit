import { JsonSchema, UISchemaElement } from '@jsonforms/core';
import { SurveyPage } from '../types/survey';
export declare function compilePage(page: Pick<SurveyPage, 'questions'>): {
    schema: JsonSchema;
    uischema: UISchemaElement;
};
