/* eslint-disable react-refresh/only-export-components */
import { DEFAULT_ARIA_LOCALE } from 'constants/variables'
import { RouterProvider } from '@tanstack/react-router'
import { I18nProvider } from 'react-aria'
import { router } from './constants/router'
import { withAppProviders } from './providers/appProvider'
import './styles/global.scss'

function App() {
  return (
    <I18nProvider locale={DEFAULT_ARIA_LOCALE}>
      <RouterProvider router={router} />
    </I18nProvider>
  )
}

export default withAppProviders(App)
