/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_GAME_URL: string
  readonly VITE_TAP_AMOUNT: number
  readonly VITE_NODE_ENV: string
  readonly VITE_X_API_KEY: string
  readonly VITE_x_APP_URL: string
  readonly VITE_x_APP_URL: string
  readonly VITE_TEST_INTERFACE_SHOW: string
  readonly VITE_TAP_API_APP_TAP_MIN_DELAY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
