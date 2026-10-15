import { Survey } from '../types/survey';
export declare const surveySchema: {
    readonly $id: "survey-builder-kit/survey";
    readonly type: "object";
    readonly required: readonly ["id", "title", "version", "createdAt", "updatedAt", "pages", "startPageId"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
        };
        readonly schemaVersion: {
            readonly type: "number";
        };
        readonly version: {
            readonly type: "number";
        };
        readonly createdAt: {
            readonly type: "string";
        };
        readonly updatedAt: {
            readonly type: "string";
        };
        readonly startPageId: {
            readonly type: "string";
        };
        readonly pages: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["id", "title", "questions", "schema", "uischema", "branch", "defaultNextPageId"];
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly title: {
                        readonly type: "string";
                    };
                    readonly questions: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly required: readonly ["id", "type", "label"];
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly slug: {
                                    readonly type: "string";
                                };
                                readonly title: {
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly enum: readonly ["shortText", "longText", "singleChoice", "multipleChoice", "rating", "nps", "number", "boolean", "date", "label"];
                                };
                                readonly label: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                    readonly schema: {
                        readonly type: "object";
                    };
                    readonly uischema: {
                        readonly type: "object";
                    };
                    readonly branch: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly required: readonly ["id", "when", "goToPageId"];
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly when: {
                                    readonly $ref: "#/definitions/conditionGroup";
                                };
                                readonly goToPageId: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                    readonly defaultNextPageId: {
                        readonly type: "string";
                    };
                };
            };
        };
    };
    readonly definitions: {
        readonly conditionGroup: {
            readonly type: "object";
            readonly required: readonly ["logic", "conditions"];
            readonly properties: {
                readonly logic: {
                    readonly enum: readonly ["AND", "OR"];
                };
                readonly conditions: {
                    readonly type: "array";
                    readonly items: {
                        readonly $ref: "#/definitions/conditionNode";
                    };
                };
            };
        };
        readonly conditionNode: {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly required: readonly ["fieldPath", "operator"];
                readonly properties: {
                    readonly fieldPath: {
                        readonly type: "string";
                    };
                    readonly operator: {
                        readonly enum: readonly ["eq", "neq", "contains", "gt", "gte", "lt", "lte", "isEmpty", "isNotEmpty"];
                    };
                };
            }, {
                readonly $ref: "#/definitions/conditionGroup";
            }];
        };
    };
};
export interface SurveyValidationResult {
    valid: boolean;
    errors?: string[];
}
export declare function validateSurvey(data: unknown): SurveyValidationResult;
export declare function normalizeSurvey(survey: Survey): Survey;
