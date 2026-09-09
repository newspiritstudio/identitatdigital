import type { SourceSeed } from './types'

const CONSULTED = '2026-09-09'

const s = (
  slug: string,
  title: string,
  url: string,
  publisher: string,
  type: string,
  reliability: SourceSeed['reliability'],
  extra: Partial<SourceSeed> = {},
): SourceSeed => ({
  slug,
  title,
  url,
  publisher,
  type,
  reliability,
  language: 'en',
  consultedAt: CONSULTED,
  ...extra,
})

/**
 * Catàleg de fonts.
 *
 * Es reutilitzen entre fitxes: la política de privadesa de Meta sosté
 * afirmacions de Facebook, d'Instagram i, en part, de WhatsApp. Els títols es
 * conserven en l'idioma original; el resum és en català.
 */
export const sources: SourceSeed[] = [
  /* ─────────────── Meta ─────────────── */
  s('meta-privacy-policy', 'Meta Privacy Policy', 'https://www.facebook.com/privacy/policy/', 'Meta Platforms', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa comuna de Facebook, Instagram, Messenger i Threads: dades recollides, finalitats i compartició dins del grup.',
  }),
  s('meta-privacy-center', 'Meta Privacy Center', 'https://www.facebook.com/privacy/center/', 'Meta Platforms', 'privacy-center', 'primary', {
    summary: 'Portal de controls de privadesa del grup Meta.',
  }),
  s('meta-transparency-center', 'Meta Transparency Center', 'https://transparency.meta.com/', 'Meta Platforms', 'transparency-report', 'primary', {
    summary: 'Informes de peticions governamentals i d’aplicació de normes de Meta.',
  }),
  s('fb-delete-account', 'Permanently delete your Facebook profile', 'https://www.facebook.com/help/224562897555674', 'Meta Platforms', 'support-doc', 'primary', {
    excerpt: 'After 30 days, your account and all of your information will be permanently deleted, and you won’t be able to retrieve your information. It may take up to 90 days from the beginning of the deletion process to delete all of the things you’ve posted.',
    summary: 'Procés oficial d’eliminació del compte de Facebook, amb els terminis de 30 i 90 dies.',
  }),
  s('fb-download-info', 'Access and download your information', 'https://www.facebook.com/help/1701730696756992', 'Meta Platforms', 'support-doc', 'primary', {
    summary: 'Exportació de la informació del compte de Facebook.',
  }),
  s('ig-delete-account', 'Permanently delete or deactivate your Instagram profile', 'https://help.instagram.com/139886812848894', 'Meta Platforms', 'support-doc', 'primary', {
    excerpt: 'When you delete your account, your profile, photos, videos, comments, likes and followers will be permanently removed.',
    summary: 'Procés oficial d’eliminació del compte d’Instagram.',
  }),
  s('wa-privacy-policy-eea', 'WhatsApp Privacy Policy (European Region)', 'https://www.whatsapp.com/legal/privacy-policy-eea', 'WhatsApp Ireland', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa específica per a l’Espai Econòmic Europeu.',
  }),
  s('wa-delete-account', 'How to delete your account', 'https://faq.whatsapp.com/2138577903196467', 'WhatsApp', 'support-doc', 'primary', {
    summary: 'Eliminació del compte de WhatsApp des de l’aplicació.',
  }),
  s('wa-manage-info', 'Access, manage and delete your information', 'https://faq.whatsapp.com/227626810186044', 'WhatsApp', 'support-doc', 'primary', {
    excerpt: 'If you only delete the WhatsApp application without using the in-app Delete My Account feature, it may take up to 90 days to delete your WhatsApp information.',
    summary: 'Drets d’accés, exportació i supressió a WhatsApp.',
  }),
  s('wa-security', 'WhatsApp Security Advisories i xifratge d’extrem a extrem', 'https://www.whatsapp.com/security/advisories', 'WhatsApp', 'technical-doc', 'primary', {
    excerpt: 'In 2016, WhatsApp completed the rollout of end-to-end encryption utilizing the Signal Protocol designed by Open Whisper Systems.',
    summary: 'Documentació de seguretat i avisos de vulnerabilitats de WhatsApp.',
  }),
  s('wa-backups-whitepaper', 'Security of End-To-End Encrypted Backups', 'https://www.whatsapp.com/security/WhatsApp_Security_Encrypted_Backups_Whitepaper.pdf', 'WhatsApp', 'technical-doc', 'primary', {
    summary: 'Document tècnic sobre el xifratge opcional de les còpies de seguretat.',
  }),

  /* ─────────────── Alphabet ─────────────── */
  s('google-privacy-policy', 'Google Privacy Policy', 'https://policies.google.com/privacy', 'Google', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa comuna del cercador, Gmail, YouTube, Maps, Chrome i la resta de serveis de Google.',
  }),
  s('google-delete-account', 'Delete your Google Account', 'https://support.google.com/accounts/answer/32046', 'Google', 'support-doc', 'primary', {
    summary: 'Procés oficial d’eliminació del compte de Google i de serveis concrets.',
  }),
  s('google-takeout-help', 'How to download your Google data', 'https://support.google.com/accounts/answer/3024190', 'Google', 'support-doc', 'primary', {
    summary: 'Google Takeout: exportació de dades en formats oberts.',
  }),
  s('google-my-activity', 'My Activity — controls d’activitat del compte de Google', 'https://myactivity.google.com/', 'Google', 'privacy-center', 'primary', {
    summary: 'Historial web i d’aplicacions, historial de YouTube i cronologia d’ubicacions, amb esborrat automàtic configurable.',
  }),
  s('google-ad-center', 'My Ad Center', 'https://myadcenter.google.com/', 'Google', 'privacy-center', 'primary', {
    summary: 'Controls de personalització publicitària del compte de Google.',
  }),
  s('google-transparency-report', 'Google Transparency Report', 'https://transparencyreport.google.com/', 'Google', 'transparency-report', 'primary', {
    summary: 'Peticions governamentals de dades i de retirada de contingut.',
  }),
  s('chrome-privacy-notice', 'Google Chrome Privacy Notice', 'https://www.google.com/chrome/privacy/', 'Google', 'privacy-policy', 'primary', {
    summary: 'Avís de privadesa específic de Chrome: modes de navegació, sincronització i dades enviades a Google.',
  }),
  s('google-safety-center', 'Google Safety Center', 'https://safety.google/', 'Google', 'privacy-center', 'primary', {
    summary: 'Documentació de seguretat i controls de privadesa del compte de Google.',
  }),

  /* ─────────────── TikTok ─────────────── */
  s('tiktok-privacy-eea', 'TikTok Privacy Policy (EEA, UK and Switzerland)', 'https://www.tiktok.com/legal/page/eea/privacy-policy/en', 'TikTok Technology Limited', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa europea de TikTok: dades recollides, publicitat i transferències internacionals.',
  }),
  s('tiktok-delete-account', 'Deleting an account', 'https://support.tiktok.com/en/account-and-privacy/deleting-an-account/deleting-an-account', 'TikTok', 'support-doc', 'primary', {
    summary: 'Procés d’eliminació del compte de TikTok, amb període de gràcia de 30 dies.',
  }),
  s('tiktok-request-data', 'How to request and download data from a TikTok account', 'https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data', 'TikTok', 'support-doc', 'primary', {
    summary: 'Exportació de dades personals en format llegible per màquina.',
  }),
  s('tiktok-transparency', 'TikTok Transparency Center', 'https://www.tiktok.com/transparency/en/', 'TikTok', 'transparency-report', 'primary', {
    summary: 'Informes de peticions governamentals i d’aplicació de normes.',
  }),

  /* ─────────────── Microsoft / LinkedIn ─────────────── */
  s('linkedin-privacy-policy', 'LinkedIn Privacy Policy', 'https://www.linkedin.com/legal/privacy-policy', 'LinkedIn Ireland', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de LinkedIn: perfil, activitat, inferències i publicitat.',
  }),
  s('linkedin-close-account', 'Close and delete your LinkedIn account', 'https://www.linkedin.com/help/linkedin/answer/a1379064', 'LinkedIn', 'support-doc', 'primary', {
    summary: 'Tancament del compte de LinkedIn des de la configuració.',
  }),
  s('linkedin-download-data', 'Download your account data', 'https://www.linkedin.com/help/linkedin/answer/a1339364', 'LinkedIn', 'support-doc', 'primary', {
    excerpt: 'LinkedIn provides your own personal data but does not provide People You May Know or Who’s Viewed Your Profile data.',
    summary: 'Exportació de dades de LinkedIn, amb les seves limitacions declarades.',
  }),
  s('linkedin-manage-data', 'Manage your Personal Data', 'https://www.linkedin.com/help/linkedin/answer/a1340649', 'LinkedIn', 'support-doc', 'primary', {
    summary: 'Controls de dades personals i publicitat de LinkedIn.',
  }),

  /* ─────────────── Amazon ─────────────── */
  s('amazon-privacy-notice', 'Amazon.es — Aviso de Privacidad', 'https://www.amazon.es/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ', 'Amazon Europe Core', 'privacy-policy', 'primary', {
    language: 'es',
    summary: 'Avís de privadesa d’Amazon a Europa: dades recollides, finalitats publicitàries i drets.',
  }),
  s('amazon-close-account', 'Request the Closure of Your Account and the Deletion of Your Personal Information', 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GDK92DNLSGWTV6MP', 'Amazon', 'support-doc', 'primary', {
    excerpt: 'A confirmation notification will be sent to the email address associated with your account or via text message, and you’ll need to reply within five days to verify your request.',
    summary: 'Sol·licitud de tancament del compte i supressió de dades a Amazon.',
  }),
  s('amazon-ad-preferences', 'Amazon — Preferencias de publicidad', 'https://www.amazon.es/adprefs', 'Amazon', 'privacy-center', 'primary', {
    language: 'es',
    summary: 'Control per desactivar la publicitat personalitzada d’Amazon.',
  }),

  /* ─────────────── X ─────────────── */
  s('x-privacy-policy', 'X Privacy Policy', 'https://x.com/en/privacy', 'X Corp.', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa d’X: dades recollides, publicitat, socis i usos per a intel·ligència artificial.',
  }),
  s('x-deactivate-account', 'How to deactivate your X account', 'https://help.x.com/en/managing-your-account/how-to-deactivate-x-account', 'X Corp.', 'support-doc', 'primary', {
    excerpt: 'Deactivated accounts can be restored for up to 30 days after deactivation.',
    summary: 'Desactivació del compte d’X, pas previ obligatori a l’eliminació.',
  }),
  s('x-your-data', 'How to access and download your X data', 'https://help.x.com/en/managing-your-account/accessing-your-x-data', 'X Corp.', 'support-doc', 'primary', {
    summary: 'Accés i exportació de les dades del compte d’X.',
  }),
  s('x-transparency', 'X Transparency Reports', 'https://transparency.x.com/', 'X Corp.', 'transparency-report', 'primary', {
    summary: 'Informes de peticions governamentals i de retirada de contingut.',
  }),

  /* ─────────────── Netflix ─────────────── */
  s('netflix-privacy-statement', 'Netflix Privacy Statement', 'https://help.netflix.com/legal/privacy', 'Netflix', 'privacy-policy', 'primary', {
    summary: 'Declaració de privadesa de Netflix: dades de visionat, dispositius i publicitat del pla amb anuncis.',
  }),
  s('netflix-deletion-retention', 'Deletion, removal and retention of information', 'https://help.netflix.com/en/node/100625', 'Netflix', 'support-doc', 'primary', {
    summary: 'Què elimina Netflix, quan i què conserva després de tancar el compte.',
  }),
  s('netflix-cancel', 'How to cancel Netflix', 'https://help.netflix.com/en/node/407', 'Netflix', 'support-doc', 'primary', {
    summary: 'Cancel·lació de la subscripció, pas previ a la supressió del compte.',
  }),

  /* ─────────────── Spotify ─────────────── */
  s('spotify-privacy-policy', 'Spotify Privacy Policy', 'https://www.spotify.com/legal/privacy-policy/', 'Spotify AB', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de Spotify: dades d’escolta, inferències i publicitat.',
  }),
  s('spotify-close-account', 'Closing your account and deleting your data', 'https://support.spotify.com/us/article/how-can-i-close-my-spotify-account/', 'Spotify', 'support-doc', 'primary', {
    excerpt: 'After you close your account, Spotify emails you a link which you can use to reactivate it within 7 days.',
    summary: 'Tancament del compte de Spotify amb finestra de recuperació de 7 dies.',
  }),
  s('spotify-privacy-settings', 'Spotify — Privacy settings', 'https://www.spotify.com/account/privacy/', 'Spotify', 'privacy-center', 'primary', {
    summary: 'Controls de personalització i sol·licitud d’exportació de dades.',
  }),

  /* ─────────────── Telegram ─────────────── */
  s('telegram-privacy-policy', 'Telegram Privacy Policy', 'https://telegram.org/privacy', 'Telegram', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de Telegram: dades recollides, xifratge i cessions a autoritats.',
  }),
  s('telegram-faq', 'Telegram FAQ', 'https://telegram.org/faq', 'Telegram', 'support-doc', 'primary', {
    summary: 'Preguntes freqüents: xats secrets, xifratge al núvol i funcionament del servei.',
  }),
  s('telegram-delete-account', 'Telegram — Delete account', 'https://telegram.org/faq/delete-account', 'Telegram', 'support-doc', 'primary', {
    summary: 'Eliminació del compte des de my.telegram.org i autodestrucció per inactivitat.',
  }),
  s('telegram-account-deletion-api', 'Telegram API — Account deletion', 'https://core.telegram.org/api/account-deletion', 'Telegram', 'technical-doc', 'primary', {
    summary: 'Documentació tècnica del procés d’eliminació i del que es conserva.',
  }),

  /* ─────────────── Snapchat ─────────────── */
  s('snap-privacy-policy', 'Snap Privacy Policy', 'https://values.snap.com/privacy/privacy-policy', 'Snap Inc.', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de Snapchat: Snaps, Memories, ubicació i publicitat.',
  }),
  s('snap-delete-account', 'How do I deactivate or delete my Snapchat account?', 'https://help.snapchat.com/hc/en-us/articles/7012328360596-How-do-I-deactivate-or-delete-my-Snapchat-account', 'Snap Inc.', 'support-doc', 'primary', {
    excerpt: 'This will deactivate an account for 30 days, during which time the account can still be reactivated.',
    summary: 'Desactivació i eliminació del compte de Snapchat.',
  }),
  s('snap-your-account', 'Your Snapchat Account — Privacy by product', 'https://values.snap.com/privacy/privacy-by-product/your-snapchat-account', 'Snap Inc.', 'privacy-center', 'primary', {
    summary: 'Detall per producte de què es conserva i què s’elimina.',
  }),
  s('snap-transparency', 'Snap Transparency Report', 'https://values.snap.com/privacy/transparency', 'Snap Inc.', 'transparency-report', 'primary', {
    summary: 'Informe semestral de peticions governamentals i aplicació de normes.',
  }),

  /* ─────────────── Reddit ─────────────── */
  s('reddit-privacy-policy', 'Reddit Privacy Policy', 'https://www.reddit.com/policies/privacy-policy', 'Reddit, Inc.', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de Reddit: pseudonimat, publicitat i cessions.',
  }),
  s('reddit-delete-account', 'How do I delete my account?', 'https://support.reddithelp.com/hc/en-us/articles/204579509-How-do-I-delete-my-account', 'Reddit', 'support-doc', 'primary', {
    excerpt: 'Deleting your account doesn’t delete any posts or comments you’ve made. Any posts or comments you made from your deleted account stay on Reddit, but people can’t see who they came from.',
    summary: 'Eliminació del compte de Reddit i què hi queda publicat.',
  }),
  s('reddit-delete-data', 'Deleting your Reddit data', 'https://support.reddithelp.com/hc/en-us/sections/360008917951-Deleting-Your-Reddit-Data', 'Reddit', 'support-doc', 'primary', {
    summary: 'Supressió de dades i sol·licituds RGPD a Reddit.',
  }),

  /* ─────────────── Pinterest ─────────────── */
  s('pinterest-privacy-policy', 'Pinterest Privacy Policy', 'https://policy.pinterest.com/en/privacy-policy', 'Pinterest, Inc.', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de Pinterest: activitat, socis publicitaris i inferències.',
  }),
  s('pinterest-delete-account', 'Delete or temporarily deactivate your account', 'https://help.pinterest.com/en/article/deactivate-or-close-your-account', 'Pinterest', 'support-doc', 'primary', {
    excerpt: 'Your account and personal data are permanently deleted in 7 days.',
    summary: 'Eliminació del compte de Pinterest en set dies.',
  }),
  s('pinterest-personal-data', 'Access, edit or delete personal data', 'https://help.pinterest.com/en/article/review-personal-data-options', 'Pinterest', 'support-doc', 'primary', {
    summary: 'Exercici dels drets d’accés, rectificació i supressió a Pinterest.',
  }),
  s('pinterest-privacy-settings', 'Manage your privacy and data settings', 'https://help.pinterest.com/en/article/your-privacy-and-data-settings', 'Pinterest', 'support-doc', 'primary', {
    summary: 'Controls de personalització i publicitat de Pinterest.',
  }),

  /* ─────────────── Tinder ─────────────── */
  s('tinder-privacy-policy', 'Tinder Privacy Policy', 'https://policies.tinder.com/privacy', 'Match Group', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de Tinder: perfil, ubicació, dades sensibles i compartició amb el grup Match.',
  }),
  s('tinder-delete-account', 'Delete your Tinder account', 'https://www.help.tinder.com/hc/en-us/articles/6956972185229-Delete-your-Tinder-account', 'Match Group', 'support-doc', 'primary', {
    summary: 'Eliminació del compte de Tinder des de l’aplicació.',
  }),

  /* ─────────────── Glovo ─────────────── */
  s('glovo-privacy-policy', 'Política de privacidad de Glovo', 'https://glovoapp.com/docs/es/legal/privacy/', 'Glovoapp23', 'privacy-policy', 'primary', {
    language: 'es',
    excerpt: 'Puede oponerse en cualquier momento a la elaboración de perfiles enviando un correo electrónico a: gdpr@glovoapp.com.',
    summary: 'Política de privadesa de Glovo per a persones usuàries: dades, perfilat i drets.',
  }),
  s('glovo-security', 'Security at Glovo', 'https://glovoapp.com/en/security', 'Glovoapp23', 'technical-doc', 'primary', {
    summary: 'Pàgina de seguretat de Glovo i canal de comunicació de vulnerabilitats.',
  }),
  s('glovo-delete-guide', 'Cómo eliminar la cuenta de Glovo', 'https://www.movilzona.es/noticias/aplicaciones/como-cerrar-cuenta-glovo/', 'Movilzona', 'press', 'secondary', {
    language: 'es',
    summary: 'Descripció del recorregut real per donar de baixa el compte, que passa obligatòriament per atenció al client.',
  }),

  /* ─────────────── Signal ─────────────── */
  s('signal-privacy-policy', 'Signal Privacy Policy', 'https://signal.org/legal/', 'Signal Technology Foundation', 'privacy-policy', 'primary', {
    summary: 'Política de privadesa de Signal: número de telèfon, data d’alta i poca cosa més.',
  }),
  s('signal-delete-account', 'Delete Account — Signal Support', 'https://support.signal.org/hc/en-us/articles/360007061192-Delete-Account', 'Signal', 'support-doc', 'primary', {
    excerpt: 'If you no longer have access to the phone where you set up your Signal account, your account will be deleted after 120 days of inactivity.',
    summary: 'Eliminació del compte de Signal des de l’aplicació.',
  }),
  s('signal-docs', 'Signal — Technical documentation', 'https://signal.org/docs/', 'Signal', 'technical-doc', 'primary', {
    summary: 'Especificacions del protocol Signal i del xifratge de metadades.',
  }),
  s('signal-github', 'Signal — Repositoris de codi', 'https://github.com/signalapp', 'Signal', 'repository', 'primary', {
    summary: 'Codi font del client i del servidor de Signal.',
  }),

  /* ─────────────── Proton ─────────────── */
  s('proton-privacy-policy', 'Proton Privacy Policy', 'https://proton.me/legal/privacy', 'Proton AG', 'privacy-policy', 'primary', {
    excerpt: 'Under no circumstances can Proton decrypt end-to-end encrypted content and disclose decrypted copies.',
    summary: 'Política de privadesa de Proton: xifratge de coneixement zero i dades mínimes de compte.',
  }),
  s('proton-mail-privacy', 'Proton Mail Privacy Policy', 'https://proton.me/mail/privacy-policy', 'Proton AG', 'privacy-policy', 'primary', {
    summary: 'Política específica de Proton Mail.',
  }),
  s('proton-delete-account', 'How to delete your Proton Account', 'https://proton.me/support/delete-account', 'Proton AG', 'support-doc', 'primary', {
    excerpt: 'When you delete your Proton Account, your account and all its data will be permanently deleted from Proton’s systems.',
    summary: 'Eliminació immediata i irreversible del compte de Proton.',
  }),
  s('proton-transparency', 'Proton Transparency Report', 'https://proton.me/legal/transparency', 'Proton AG', 'transparency-report', 'primary', {
    summary: 'Registre de peticions d’autoritats suïsses i estrangeres.',
  }),

  /* ─────────────── DuckDuckGo ─────────────── */
  s('ddg-privacy-policy', 'DuckDuckGo Privacy Policy', 'https://duckduckgo.com/privacy', 'DuckDuckGo, Inc.', 'privacy-policy', 'primary', {
    excerpt: 'DuckDuckGo does not ever collect or share users’ personal information.',
    summary: 'Política de privadesa de DuckDuckGo: cap perfil, cap historial de cerca vinculat a la persona.',
  }),
  s('ddg-anonymous-local', 'How DuckDuckGo Keeps Your Local Search Results Anonymous', 'https://duckduckgo.com/duckduckgo-help-pages/privacy/anonymous-localized-results', 'DuckDuckGo', 'support-doc', 'primary', {
    summary: 'Com s’obtenen resultats locals sense conservar la ubicació.',
  }),

  /* ─────────────── Mozilla ─────────────── */
  s('firefox-privacy-notice', 'Firefox Privacy Notice', 'https://www.mozilla.org/en-US/privacy/firefox/', 'Mozilla', 'privacy-policy', 'primary', {
    summary: 'Avís de privadesa de Firefox: dades tècniques, sincronització i suggeriments.',
  }),
  s('mozilla-accounts-privacy', 'Mozilla Accounts Privacy Notice', 'https://www.mozilla.org/en-US/privacy/mozilla-accounts/', 'Mozilla', 'privacy-policy', 'primary', {
    summary: 'Dades del compte de Mozilla i xifratge de la sincronització.',
  }),
  s('firefox-telemetry-settings', 'Manage technical and interaction data collection settings in Firefox', 'https://support.mozilla.org/en-US/kb/technical-and-interaction-data', 'Mozilla', 'support-doc', 'primary', {
    excerpt: 'If you opt out of sending technical and interaction data, Mozilla will also treat this as a request to delete any data that was previously collected.',
    summary: 'Com desactivar la telemetria de Firefox i què implica.',
  }),
  s('mozilla-source', 'Firefox — Codi font', 'https://github.com/mozilla-firefox/firefox', 'Mozilla', 'repository', 'primary', {
    summary: 'Repositori del codi font de Firefox.',
  }),

  /* ─────────────── Brave ─────────────── */
  s('brave-browser-privacy', 'Brave Browser Privacy Policy', 'https://brave.com/privacy/browser/', 'Brave Software', 'privacy-policy', 'primary', {
    excerpt: 'The Brave browser is designed to not know who you are, or what sites you visit.',
    summary: 'Política de privadesa del navegador Brave, amb el detall de cada funció.',
  }),
  s('brave-search-privacy', 'Brave Search privacy notice', 'https://search.brave.com/help/privacy-policy', 'Brave Software', 'privacy-policy', 'primary', {
    summary: 'Avís de privadesa del cercador propi de Brave.',
  }),
  s('brave-github', 'Brave — Codi font', 'https://github.com/brave/brave-browser', 'Brave Software', 'repository', 'primary', {
    summary: 'Repositori del navegador Brave.',
  }),

  /* ─────────────── Reguladors i incidents ─────────────── */
  s('dpc-meta-transfers-2023', 'Data Protection Commission announces conclusion of inquiry into Meta Ireland', 'https://www.dataprotection.ie/en/news-media/press-releases/Data-Protection-Commission-announces-conclusion-of-inquiry-into-Meta-Ireland', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2023-05-22',
    summary: 'Sanció de 1.200 milions d’euros a Meta per les transferències de dades de Facebook cap als Estats Units.',
  }),
  s('dpc-meta-ads-2023', 'Data Protection Commission announces conclusion of two inquiries into Meta Ireland', 'https://www.dataprotection.ie/en/news-media/data-protection-commission-announces-conclusion-two-inquiries-meta-ireland', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2023-01-04',
    excerpt: 'Meta Ireland is not entitled to rely on the "contract" legal basis in connection with the delivery of behavioural advertising.',
    summary: 'Sancions de 210 i 180 milions d’euros a Facebook i Instagram per la base jurídica de la publicitat conductual.',
  }),
  s('dpc-facebook-scraping-2022', 'Data Protection Commission announces decision in Facebook “Data Scraping” Inquiry', 'https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-decision-in-facebook-data-scraping-inquiry', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2022-11-28',
    summary: 'Sanció de 265 milions d’euros per no aplicar protecció de dades des del disseny als cercadors de contactes.',
  }),
  s('dpc-instagram-2022', 'Data Protection Commission announces decision in Instagram Inquiry', 'https://dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-decision-instagram-inquiry', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2022-09-15',
    summary: 'Sanció de 405 milions d’euros pel tractament de dades de menors i els comptes públics per defecte.',
  }),
  s('dpc-whatsapp-2021', 'Data Protection Commission announces decision in WhatsApp inquiry', 'https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-decision-whatsapp-inquiry', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2021-09-02',
    summary: 'Sanció de 225 milions d’euros per incompliment de les obligacions de transparència dels articles 12 a 14 del RGPD.',
  }),
  s('dpc-meta-251m-2024', 'Irish Data Protection Commission fines Meta €251 Million', 'https://www.dataprotection.ie/en/news-media/press-releases/irish-data-protection-commission-fines-meta-eu251-million', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2024-12-17',
    summary: 'Sanció per la bretxa de 2018 que va exposar els identificadors d’accés de 29 milions de comptes.',
  }),
  s('dpc-tiktok-2023', 'Irish Data Protection Commission announces €345 million fine of TikTok', 'https://www.dataprotection.ie/en/news-media/press-releases/DPC-announces-345-million-euro-fine-of-TikTok', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2023-09-15',
    summary: 'Sanció de 345 milions d’euros pels comptes de menors públics per defecte i pels patrons enganyosos.',
  }),
  s('dpc-tiktok-2025', 'Irish Data Protection Commission fines TikTok €530 million', 'https://www.dataprotection.ie/en/news-media/latest-news/irish-data-protection-commission-fines-tiktok-eu530-million-and-orders-corrective-measures-following', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2025-05-02',
    summary: 'Sanció de 530 milions d’euros per les transferències de dades europees a la Xina i per manca de transparència.',
  }),
  s('dpc-linkedin-2024', 'Irish Data Protection Commission fines LinkedIn Ireland €310 million', 'https://www.dataprotection.ie/en/news-media/press-releases/irish-data-protection-commission-fines-linkedin-ireland-eu310-million', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2024-10-24',
    summary: 'Sanció de 310 milions d’euros per la base jurídica de l’anàlisi de comportament i la publicitat dirigida.',
  }),
  s('dpc-grok-2024', 'Data Protection Commission welcomes conclusion of proceedings relating to X’s AI tool ‘Grok’', 'https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-welcomes-conclusion-proceedings-relating-xs-ai-tool-grok', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2024-09-04',
    summary: 'X es compromet permanentment a no fer servir per entrenar Grok les dades europees recollides entre el 7 de maig i l’1 d’agost de 2024.',
  }),
  s('dpc-meta-ai-2025', 'DPC statement on Meta AI', 'https://www.dataprotection.ie/en/news-media/latest-news/dpc-statement-meta-ai', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
    publishedAt: '2025-05-21',
    summary: 'Marc acordat perquè Meta entreni els seus models amb contingut públic europeu, amb formulari d’oposició sense justificació.',
  }),
  s('edpb-twitter-2020', 'Irish Data Protection Commission announces decision in Twitter inquiry', 'https://www.edpb.europa.eu/news/national-news/2020/irish-data-protection-commission-announces-decision-twitter-inquiry_en', 'European Data Protection Board', 'regulator', 'authority', {
    publishedAt: '2020-12-15',
    summary: 'Sanció de 450.000 euros a Twitter per una fallada que va fer públics tuits protegits.',
  }),
  s('cnil-cookies-2021', 'Cookies : la CNIL sanctionne GOOGLE à hauteur de 150 millions d’euros et FACEBOOK à hauteur de 60 millions d’euros', 'https://www.cnil.fr/fr/cookies-la-cnil-sanctionne-google-hauteur-de-150-millions-deuros-et-facebook-hauteur-de-60-millions', 'CNIL (França)', 'regulator', 'authority', {
    language: 'fr',
    publishedAt: '2022-01-06',
    summary: 'Sancions per no permetre rebutjar les galetes amb la mateixa facilitat amb què s’accepten.',
  }),
  s('imy-spotify-2023', 'Administrative fee against Spotify', 'https://www.imy.se/en/news/administrative-fee-against-spotify/', 'IMY (Suècia)', 'regulator', 'authority', {
    publishedAt: '2023-06-12',
    summary: 'Sanció de 58 milions de corones per informació insuficient en respondre les sol·licituds d’accés.',
  }),
  s('ap-netflix-2024', 'Netflix fined for not properly informing customers', 'https://www.autoriteitpersoonsgegevens.nl/en/current/netflix-fined-for-not-properly-informing-customers', 'Autoriteit Persoonsgegevens (Països Baixos)', 'regulator', 'authority', {
    publishedAt: '2024-12-18',
    summary: 'Sanció de 4,75 milions d’euros per no informar prou clarament sobre finalitats, destinataris, terminis i transferències.',
  }),
  s('cnpd-amazon-annulled', 'Luxembourg court of appeal cancels EUR 746 million CNPD fine against Amazon', 'https://www.linari-law.lu/luxembourg-court-of-appeal-cancels-eur-746-million-cnpd-fine-against-amazon/', 'Linari Law Firm', 'press', 'secondary', {
    publishedAt: '2025-07-01',
    summary: 'El tribunal d’apel·lació anul·la la sanció rècord a Amazon per defectes de motivació; el fons no queda resolt.',
  }),
  s('aepd-glovo-2024', 'Protección de Datos multa a Glovo con 550.000 euros', 'https://www.eldiario.es/tecnologia/proteccion-datos-multa-glovo-550-000-euros-violar-privacidad-repartidores_1_10888906.html', 'elDiario.es', 'press', 'secondary', {
    language: 'es',
    publishedAt: '2024-02-02',
    summary: 'Sanció de l’AEPD per infracció dels articles 13, 25 i 32 del RGPD en el tractament de dades de repartidors.',
  }),
  s('ico-snap-myai-2024', 'ICO concludes Snap ‘My AI’ chatbot investigation', 'https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/05/ico-warns-organisations-must-not-ignore-data-protection-risks-as-it-concludes-snap-my-ai-chatbot-investigation/', 'Information Commissioner’s Office (Regne Unit)', 'regulator', 'authority', {
    publishedAt: '2024-05-21',
    summary: 'L’ICO tanca la investigació després que Snap revisés l’avaluació d’impacte de My AI.',
  }),
  s('ag-google-location-2022', 'Forty Attorneys General Announce Historic Settlement with Google over Location Tracking Practices', 'https://www.njoag.gov/forty-attorneys-general-announce-historic-settlement-with-google-over-location-tracking-practices/', 'Fiscalia General de Nova Jersey', 'regulator', 'authority', {
    publishedAt: '2022-11-14',
    summary: 'Acord de 391,5 milions de dòlars per haver induït a error sobre els controls d’historial d’ubicacions.',
  }),
  s('mit-facebook-leak-2021', 'Everything you need to know about the Facebook data leak', 'https://www.technologyreview.com/2021/04/07/1021892/facebook-data-leak/', 'MIT Technology Review', 'press', 'secondary', {
    publishedAt: '2021-04-07',
    summary: 'Publicació en obert de dades de 533 milions de comptes obtingudes explotant el cercador de contactes.',
  }),
  s('techcrunch-reddit-2023', 'Reddit says hackers accessed internal data following employee phishing attack', 'https://techcrunch.com/2023/02/10/reddit-says-hackers-accessed-internal-data-following-employee-phishing-attack/', 'TechCrunch', 'press', 'secondary', {
    publishedAt: '2023-02-10',
    summary: 'Intrusió mitjançant phishing amb accés a codi i dades internes; Reddit afirma que no va afectar dades de comptes.',
  }),
  s('techcrunch-signal-twilio-2022', 'Signal says 1,900 users’ phone numbers exposed by Twilio breach', 'https://techcrunch.com/2022/08/15/signal-phone-number-exposed-twilio/', 'TechCrunch', 'press', 'secondary', {
    publishedAt: '2022-08-15',
    summary: 'Un atac al proveïdor d’SMS de Signal va exposar números i codis de verificació de 1.900 comptes.',
  }),
  s('bleeping-ddg-microsoft-2022', 'DuckDuckGo browser allows Microsoft trackers due to search agreement', 'https://www.bleepingcomputer.com/news/security/duckduckgo-browser-allows-microsoft-trackers-due-to-search-agreement/', 'BleepingComputer', 'press', 'secondary', {
    publishedAt: '2022-05-24',
    summary: 'El navegador de DuckDuckGo permetia rastrejadors de Microsoft per un acord de sindicació de cerca.',
  }),
  s('edpb-tiktok-2025', 'Irish Supervisory Authority fines TikTok €530 million', 'https://www.edpb.europa.eu/news/news/2025/irish-supervisory-authority-fines-tiktok-eu530-million-and-orders-corrective_en', 'European Data Protection Board', 'regulator', 'authority', {
    publishedAt: '2025-05-02',
    summary: 'Comunicat del Comitè Europeu sobre la sanció a TikTok per transferències a la Xina.',
  }),
]
