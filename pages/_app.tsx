import '../styles/globals.css'
import type { AppProps } from 'next/app'

import '@assets/css/bootstrap.min.css'
import '@assets/css/bootstrap-extended.css'
import '@assets/css/colors.min.css'
import '@assets/css/components.min.css'
import '@assets/css/themes/dark-layout.min.css'
import '@assets/css/themes/bordered-layout.min.css'
import '@assets/css/themes/semi-dark-layout.min.css'
import '@assets/css/core/menu/menu-types/vertical-menu.min.css'
import '@assets/css/plugins/forms/form-validation.min.css'
import '@assets/css/pages/authentication.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
