import { fileURLToPath, URL } from 'node:url'

import { viteMockServe } from "vite-plugin-mock"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './mock', //路径
      supportTs: false,
      logger: false,
      localEnable: true,
      // 代码注入的文件
      injectCode: `
          import { setupMockServer } from './mock/mockServer.js';
          setupMockServer();
        `,
    }) // add mock support
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
