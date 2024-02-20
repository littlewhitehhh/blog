import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { getRelPath } from './src/utils/path';
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  console.log(getRelPath('src'));
  console.log('🚀🚀~当前阶段:', command);
  console.log('🚀🚀~当前运行环境:', mode);

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': getRelPath('src'),
        '@v': getRelPath('src/views'),
        '@c': getRelPath('src/components'),
        '@u': getRelPath('src/utils'),
      },
      server: {
        port: 5174,
      },
    },
  };
});
