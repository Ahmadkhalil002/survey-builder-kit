import { Survey } from '../types/survey';
/**
 * Every "mandatory, blocks Publish" field the Builder currently marks with
 * a required indicator and inline error -- survey Name/Type (see
 * PageSidebar's own nameMissing/typeMissing), a turnstile question's site
 * key, and a disqualifying option's notice title (see QuestionCard) --
 * gathered in one place so Publish can refuse to fire with a clear reason
 * instead of silently handing the host incomplete data. Returns an empty
 * array when nothing's missing. Adding a new mandatory field anywhere in
 * the Builder means adding its check here too, or Publish won't know to
 * block on it.
 */
export declare function findMissingMandatoryFields(survey: Survey): string[];
