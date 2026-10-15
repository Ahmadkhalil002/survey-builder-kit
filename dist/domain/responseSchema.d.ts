export declare const surveyResponseSchema: {
    readonly $id: "survey-builder-kit/survey-response";
    readonly type: "object";
    readonly required: readonly ["id", "surveyId", "surveyVersion", "answersFormatVersion", "answers", "visitedPageIds", "startedAt"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly surveyId: {
            readonly type: "string";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
        };
        readonly surveyVersion: {
            readonly type: "number";
        };
        readonly answersFormatVersion: {
            readonly const: 3;
        };
        readonly answers: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["questionId", "pageId", "pageTitle", "type", "label", "displayValue"];
                readonly properties: {
                    readonly questionId: {
                        readonly type: "string";
                    };
                    readonly slug: {
                        readonly type: "string";
                    };
                    readonly pageId: {
                        readonly type: "string";
                    };
                    readonly pageTitle: {
                        readonly type: "string";
                    };
                    readonly type: {
                        readonly type: "string";
                    };
                    readonly label: {
                        readonly type: "string";
                    };
                    readonly displayValue: {
                        readonly type: "string";
                    };
                    readonly skipped: {
                        readonly type: "boolean";
                    };
                    readonly options: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly required: readonly ["value", "label", "selected"];
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                };
                                readonly label: {
                                    readonly type: "string";
                                };
                                readonly selected: {
                                    readonly type: "boolean";
                                };
                                readonly disqualifying: {
                                    readonly type: "boolean";
                                };
                            };
                        };
                    };
                    readonly disqualifying: {
                        readonly type: "boolean";
                    };
                    readonly disqualifyMessage: {
                        readonly type: "string";
                    };
                };
            };
        };
        readonly visitedPageIds: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly score: {
            readonly type: "object";
            readonly required: readonly ["total", "byCategory"];
            readonly properties: {
                readonly total: {
                    readonly type: "number";
                };
                readonly byCategory: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["categoryId", "label", "points"];
                        readonly properties: {
                            readonly categoryId: {
                                readonly type: "string";
                            };
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly points: {
                                readonly type: "number";
                            };
                        };
                    };
                };
                readonly passed: {
                    readonly type: "boolean";
                };
            };
        };
        readonly startedAt: {
            readonly type: "string";
        };
        readonly completedAt: {
            readonly type: "string";
        };
    };
};
export interface SurveyResponseValidationResult {
    valid: boolean;
    errors?: string[];
}
export declare function validateSurveyResponse(data: unknown): SurveyResponseValidationResult;
