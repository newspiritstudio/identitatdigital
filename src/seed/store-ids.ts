/**
 * Identificació de cada servei a l'App Store.
 *
 * Es desa l'identificador de paquet i no la URL de la imatge, que canvia a cada
 * versió. Així es pot tornar a demanar la icona vigent i queda constància de
 * quina fitxa de la botiga s'ha consultat.
 *
 * S'usa l'App Store i no Google Play perquè Apple publica una API de consulta
 * documentada, i això fa la importació repetible sense llegir el codi d'una
 * pàgina web.
 *
 * Els serveis sense aplicació mòbil pròpia no hi consten; l'script
 * d'importació ho fa saber.
 */
export const appStoreBundleIds: Record<string, string> = {
  /* Meta */
  whatsapp: 'net.whatsapp.WhatsApp',
  instagram: 'com.burbn.instagram',
  facebook: 'com.facebook.Facebook',

  /* Alphabet */
  'google-search': 'com.google.GoogleMobile',
  chrome: 'com.google.chrome.ios',
  gmail: 'com.google.Gmail',
  youtube: 'com.google.ios.youtube',
  'google-maps': 'com.google.Maps',

  /* Xarxes i comunitats */
  tiktok: 'com.zhiliaoapp.musically',
  x: 'com.atebits.Tweetie2',
  linkedin: 'com.linkedin.LinkedIn',
  snapchat: 'com.toyopagroup.picaboo',
  reddit: 'com.reddit.Reddit',
  pinterest: 'pinterest',

  /* Consum i oci */
  amazon: 'com.amazon.AmazonUK',
  glovo: 'com.glovo.Glovo',
  tinder: 'com.cardify.tinder',
  netflix: 'com.netflix.Netflix',
  spotify: 'com.spotify.client',

  /* Alternatives */
  telegram: 'ph.telegra.Telegraph',
  signal: 'org.whispersystems.signal',
  'proton-mail': 'ch.protonmail.protonmail',
  duckduckgo: 'com.duckduckgo.mobile.ios',
  firefox: 'org.mozilla.ios.Firefox',
  brave: 'com.brave.ios.browser',
}
