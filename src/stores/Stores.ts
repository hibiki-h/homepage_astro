import { atom } from "nanostores";
type currentLocaleType = string | undefined;

export function currentLocaleMethod(currentLocale: currentLocaleType) {
  let $currentLocale = atom<currentLocaleType>(currentLocale);
  const locale = $currentLocale.get();
  return locale;
}
