import { fileURLToPath, URL } from 'node:url'

import { viteMockServe } from "vite-plugin-mock"
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
    }), // add mock support
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: "http://127.0.0.1:5173", //代理路径
        changeOrigin: true, //允许跨域
        ws: true, //允许websocket代理
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
