export default ({ app, $vuetify }) => {
  const syncDirection = () => {
    const localeDir = app.i18n?.localeProperties?.dir || 'ltr'
    const localeCode = app.i18n?.locale || 'en'

    if ($vuetify) {
      $vuetify.rtl = localeDir === 'rtl'
    }

    if (process.client) {
      document.documentElement.setAttribute('dir', localeDir)
      document.documentElement.setAttribute('lang', localeCode)
    }
  }

  syncDirection()

  if (app.i18n) {
    app.i18n.onLanguageSwitched = () => {
      syncDirection()
    }
  }
}
