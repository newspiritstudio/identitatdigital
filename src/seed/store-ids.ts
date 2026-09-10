/**
 * Identificació de cada servei a l'App Store.
 *
 * El logotip d'una aplicació no és una dada editorial, però sí que ho és saber
 * d'on l'hem tret. Guardar l'identificador de paquet —i no la URL de la imatge,
 * que caduca a cada versió— permet tornar a demanar la icona vigent quan calgui
 * i deixa constància de quina fitxa concreta de la botiga hem consultat.
 *
 * Es fa servir l'App Store i no Google Play perquè Apple publica una API de
 * consulta documentada i estable, cosa que fa la importació reproduïble i
 * verificable sense haver de llegir el codi d'una pàgina web.
 *
 * Els serveis que no tenen aplicació mòbil pròpia no hi són: la seva absència
 * és intencionada i el script d'importació ho fa constar.
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
