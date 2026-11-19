export declare function newId(prefix: string): string;
export declare function newFieldId(existingIds: Set<string>, typeLabel: string): string;
export declare function slugify(text: string): string;
export declare function slugifyUnique(text: string, existingIds: Set<string>, fallback: string): string;
export declare function sanitizeFreeTextCode(text: string): string;
