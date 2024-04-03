import viteReactPulgin from '@vitejs/plugin-react'
import path from 'path'
import rollupMultiInput from 'rollup-plugin-multi-input'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import pkg from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') + '/'
    }
  },
  build: {
    emptyOutDir: true,
    outDir: 'public',
    
    // sourcemap: true,
    lib: {
      name: 'DevToolbar',
      // fileName: '[name]',
      entry: ['./src/index.ts'],
      exclude: ['**/stories/**', '**/*.stories.*'],
      formats: ['es']
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies)],
      output: {
        inlineDynamicImports: false
      }
    }
  },
  plugins: [
    rollupMultiInput({
      transformOutputPath: (output, input) => `${path.basename(input)}`
    }),
    viteReactPulgin(),
    dts({
      insertTypesEntry: true
    })
  ]
})
