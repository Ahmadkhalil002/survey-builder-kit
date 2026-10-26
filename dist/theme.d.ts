export interface CustomTokens {
    warningBanner: {
        bg: string;
        border: string;
        iconBg: string;
        icon: string;
        textStrong: string;
        text: string;
    };
    successBanner: {
        bg: string;
        text: string;
    };
}
declare module '@mui/material/styles' {
    interface Theme {
        custom: CustomTokens;
    }
    interface ThemeOptions {
        custom?: CustomTokens;
    }
}
/**
 * Builds the theme both components render under. `primaryColor`, when
 * given, replaces every `primary.main`/`.dark`/`.light`/`.contrastText`
 * usage throughout the library (buttons, selected-state borders/fills,
 * progress rail, etc. -- all of it reads `theme.palette.primary.*`, so one
 * color in here reaches everywhere at once) -- MUI derives `dark`/`light`/
 * `contrastText` from it automatically. Omitted, this reproduces the
 * library's hand-picked default palette exactly (not just a close
 * approximation from the auto-derivation).
 */
export declare function createLibraryTheme(primaryColor?: string): import('@mui/material').Theme;
export declare const theme: import('@mui/material').Theme;
