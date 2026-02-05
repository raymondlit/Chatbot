import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署配置
// 如果仓库名不是 'Chatbot'，请修改 base 路径
// 例如：如果仓库名是 'my-chatbot'，则 base 应该是 '/my-chatbot/'
//const base = process.env.NODE_ENV === 'production' 
//  ? '/Chatbot/'  // 生产环境使用仓库名作为 base
//  : '/'          // 开发环境使用根路径

export default defineConfig({
  plugins: [vue()],
  base: base,
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue']
        }
      }
    }
  }
})

