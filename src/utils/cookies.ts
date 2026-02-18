const COOKIE_KEY = 'miel-jeurre-cookies'

export type CookieConsent = 'accepted' | 'refused' | null

export function getCookieConsent(): CookieConsent {
  const value = localStorage.getItem(COOKIE_KEY)
  if (value === 'accepted' || value === 'refused') return value
  return null
}

export function setCookieConsent(consent: 'accepted' | 'refused'): void {
  localStorage.setItem(COOKIE_KEY, consent)
}
