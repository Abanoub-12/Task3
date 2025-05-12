import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react/jsx-runtime']
  },
  plugins: [svgr(), react()],
  server: {
    host: true,
    port: 5173
  },
  resolve: {
    alias: [
      { find: 'src', replacement: `${__dirname}/src` },
      { find: 'api', replacement: `${__dirname}/src/api` },
      { find: 'app', replacement: `${__dirname}/src/app` },
      { find: 'assets', replacement: `${__dirname}/src/assets` },
      { find: 'config', replacement: `${__dirname}/src/config` },
      { find: 'constants', replacement: `${__dirname}/src/constants` },
      { find: 'hooks', replacement: `${__dirname}/src/hooks` },
      { find: 'models', replacement: `${__dirname}/src/models` },
      { find: 'stores', replacement: `${__dirname}/src/stores` },
      { find: 'styles', replacement: `${__dirname}/src/styles` },
      { find: 'components', replacement: `${__dirname}/src/components` },
      { find: 'utils', replacement: `${__dirname}/src/utils` }
    ]
  }
})
