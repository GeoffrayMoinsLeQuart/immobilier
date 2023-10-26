module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}