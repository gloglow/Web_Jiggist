import { Locale } from "@/types/locale"

export function t(text: Record<Locale, string>, locale: Locale) {
  return text[locale] ?? text.en
}